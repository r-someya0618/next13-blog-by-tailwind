import { supabase } from '@/utils/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'
import { notFound } from 'next/navigation'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, content } = req.body
  const { status, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }])

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(status).json({ message: '新規登録しました' })
}
