'use client'

import { ColumnDef } from '@tanstack/react-table'

export type Imoveis = {
  numeroContribuinte: number
  nomeLogradouro: string
  numeroImovel: number
  complemento: string
  bairro: string
  cep: number
  areaTerreno: number
  valorM2: number
}

export const columns: ColumnDef<Imoveis>[] = [
  {
    accessorKey: 'numeroContribuinte',
    header: 'Numero Contribuinte',
  },
  {
    accessorKey: 'nomeLogradouro',
    header: 'Nome Logradouro',
  },
  {
    accessorKey: 'numeroImovel',
    header: 'Numero Imovel',
  },
  {
    accessorKey: 'complemento',
    header: 'Complemento',
  },
  {
    accessorKey: 'cep',
    header: 'Cep',
  },
  {
    accessorKey: 'bairro',
    header: 'Bairro',
  },
  {
    accessorKey: 'areaTerreno',
    header: 'Area Terreno',
  },
  {
    accessorKey: 'valorM2',
    header: 'Valor M2 Terreno',
  },
]
