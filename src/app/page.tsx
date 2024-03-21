'use client'
import { useImovelStore } from '../stores/imovel.store'
import { columns } from '../components/columns'
import { DataTable } from '../components/data-table'
import { InputForm } from '@/components/input'

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
