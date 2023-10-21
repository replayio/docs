import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import ReplayLogomark from '../../icons/ReplayLogomark'

export const config = {
  runtime: 'edge',
};

const boldFont = fetch(new URL('../../public/fonts/SpaceGrotesk-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);
const normalFont = fetch(new URL('../../public/fonts/SpaceGrotesk-Regular.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);
const backgroundImage = fetch(new URL('../../public/media/background.png', import.meta.url)).then(
  (res) => res.arrayBuffer(),
)

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') === 'undefined' ? 'Record your first replay' : searchParams.get('title');
  const boldFontData = await boldFont;
  const normalFontData = await normalFont;
  const imageData = await backgroundImage;
 
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative', 
          display: 'flex',
          fontFamily: 'SpaceGrotesk Bold',
          color: '#161821',
          width: 1200, 
          height: 630, 
          padding: 0, 
          margin: 0, 
          lineHeight: 0.9,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <img 
        //@ts-ignore
        src={imageData} 
        width={1200} 
        height={630} 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: -1, 
        }} 
      />
      <div style={{
          position: 'relative', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: 1050,
          zIndex: 2, 
        }}>
        <p style={{
          color: '#fff',
          fontSize: 85,
        }}>{title}</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
        <p style={{
          fontSize: 30,
          color: '#fff',
          paddingTop: 30,
          fontFamily: 'SpaceGrotesk Regular',
          alignSelf: 'center'
        }}><ReplayLogomark style={{ marginRight: 10 }}/> docs.replay.io</p>
        </div>
      </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'SpaceGrotesk Bold',
          data: boldFontData,
          style: 'normal'
        },
        {
          name: 'SpaceGrotesk Regular',
          data: normalFontData,
          style: 'normal'
        }
      ],
    },
  );
}