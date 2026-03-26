import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Muhammad Tanveer Abbas | SaaS Developer & MVP Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          Muhammad Tanveer Abbas
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          SaaS Developer & MVP Builder
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
