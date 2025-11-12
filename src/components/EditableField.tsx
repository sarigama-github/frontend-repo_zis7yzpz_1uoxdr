import { useState } from 'react'

type EditableFieldProps = {
  label: string
  placeholder?: string
  value?: string
}

export default function EditableField({ label, placeholder, value = '' }: EditableFieldProps) {
  const [text, setText] = useState<string>(value)
  const [editing, setEditing] = useState<boolean>(false)

  return (
    <div className="space-y-1">
      <div className="text-xs uppercase tracking-wide text-white/50">{label}</div>
      {!editing ? (
        <div className="flex items-center justify-between gap-3">
          <div className="text-white/80">{text || <span className="text-white/40">{placeholder}</span>}</div>
          <button onClick={()=>setEditing(true)} className="text-xs px-2 py-1 rounded border border-white/20 hover:bg-white/10">Edit</button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <input value={text} onChange={(e)=>setText(e.target.value)} placeholder={placeholder}
            className="flex-1 bg-transparent border border-white/20 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <button onClick={()=>setEditing(false)} className="text-xs px-2 py-1 rounded bg-white text-black hover:bg-white/90">Save</button>
        </div>
      )}
    </div>
  )
}
