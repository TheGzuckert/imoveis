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
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Imoveis - SP</h1>
      <div>
        <InputForm onFilter={setFilter} />
        <div className="container mx-auto py-2">
          <DataTable columns={columns} data={data.imoveis} />
        </div>
      </div>
    </div>
  )
}
