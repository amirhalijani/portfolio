import './globals.css'

export const metadata = {
  title: 'Amir Alijani',
  description: 'Developed With Love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
