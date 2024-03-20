'use client'
import { useImovelStore } from '../imovel.store'
import { columns } from './columns'
import { DataTable } from './data-table'
import { InputForm } from '@/components/input/input'

export default function FormPage() {
  const data = useImovelStore()

  const setFilter = async (value: string) => {
    await data.find(value)
  }

  return (
    <div className="mt-8">
      <InputForm onFilter={setFilter} />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data.imoveis} />
      </div>
    </div>
  )
}
