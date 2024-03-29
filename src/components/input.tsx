'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'

const FormSchema = z.object({
  pesquisa: z.string().min(1, {
    message: 'A pesquisa deve ter no mínimo 1 caracter',
  }),
})

export interface InputFormProps {
  onFilter: (filterValue: string) => void
}

export function InputForm(props: InputFormProps) {
  interface FormData {
    pesquisa: string
  }

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pesquisa: '',
    },
  })

  const onSubmit = (data: FormData) => {
    toast({
      title: 'Você enviou os seguintes valores:',
      description: (
        <pre className="mt-2 w-[600px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 4)}</code>
        </pre>
      ),
    })
    form.setValue('pesquisa', '')
  }

  const [filterValue, setFilterValue] = useState<string>('')

  return (
    <div className="flex justify-center items-start mt-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-3"
        >
          <FormField
            control={form.control}
            name="pesquisa"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center">
                    <FormControl>
                      <Input
                        placeholder="Escreva algo aqui para obter informações do imóvel"
                        {...field}
                        onChange={(e) => {
                          e.preventDefault()
                          field.onChange(e)
                          setFilterValue(e.target.value)
                        }}
                        className="w-[400px]"
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      className="ml-2"
                      onClick={(e) => {
                        e.preventDefault()
                        props.onFilter(filterValue)
                      }}
                    >
                      Buscar
                    </Button>
                  </div>
                  {form.formState.errors.pesquisa &&
                    form.getValues('pesquisa') !== '' && (
                      <FormMessage className="mt-5">
                        {form.formState.errors.pesquisa.message}
                      </FormMessage>
                    )}
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
