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
  // FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  pesquisa: z.string().regex(/^\d{4,}$/, {
    message: 'A pesquisa deve ter no mínimo 3 caracteres ou numeros',
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pesquisa: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[600px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 4)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex justify-center items-start mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-3"
        >
          {/* <FormLabel>Pesquisa</FormLabel> */}
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
                        className="w-[400px]"
                      />
                    </FormControl>
                    <Button type="submit" className="ml-2">
                      Buscar
                    </Button>
                  </div>
                  <FormMessage className="mt-5" />
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
