// pages/index.tsx
import UploadForm from '@/components/UploadForm'

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex justify-center items-center bg-gray-100">
        <UploadForm />
      </main>
    </div>
  )
}
