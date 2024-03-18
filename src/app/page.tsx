import { Metadata } from 'next'
import { InputForm } from '@/components/input'

export const metadata: Metadata = {
  title: 'Sistema Imobliario',
}

export default function Home() {
  return (
    <div>
      <InputForm />
    </div>
  )
}
