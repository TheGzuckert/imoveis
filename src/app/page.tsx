import { Metadata } from 'next'
import { InputForm } from '@/components/input/input'

export const metadata: Metadata = {
  title: 'Sistema Imobliario',
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Imoveis - SP</h1>
      <InputForm />
    </div>
  )
}
