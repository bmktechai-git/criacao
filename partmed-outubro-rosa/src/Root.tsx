import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';
import {Audio} from '@remotion/media';
import {BrandHeader} from './Brand';
import {MotionScene} from './MotionScene';
import {Narration} from './Narration';
import {Institutional} from './Institutional';
import {PackageCard} from './PackageCard';
import {Ending,Signature} from './Ending';
import type {ComponentProps} from 'react';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/latin-700.css';
import '@fontsource/montserrat/latin-800.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
const Timeline=({preview=false}:{preview?:boolean})=>{const {fps}=useVideoConfig();return <AbsoluteFill>
<Sequence name="01 Fachada" from={0} durationInFrames={Math.round(8.85*fps)} premountFor={fps}><Institutional preview={preview} title="CUIDAR É AMAR." message="" source="fachada.mp4"/></Sequence>
<Sequence name="02 Recepção" from={Math.round(8.4*fps)} durationInFrames={Math.round(4.95*fps)} premountFor={fps}><Institutional preview={preview} title="OUTUBRO ROSA" message="" source="recepcao.mp4" trimSeconds={2}/></Sequence>
<Sequence name="03 Prevenção • motion" from={Math.round(12.9*fps)} durationInFrames={Math.round(5.25*fps)} premountFor={fps}><MotionScene kind="ribbon" title="PREVENÇÃO.
DIAGNÓSTICO PRECOCE."/></Sequence>
<Sequence name="04 Autocuidado • ilustração" from={Math.round(17.7*fps)} durationInFrames={Math.round(9.65*fps)} premountFor={fps}><MotionScene kind="consultation" title="OLHE PARA VOCÊ."/></Sequence>
<Sequence name="05 Calendário • motion" from={Math.round(26.9*fps)} durationInFrames={Math.round(4.75*fps)} premountFor={fps}><MotionScene kind="calendar" title="NÃO DEIXE
PARA DEPOIS."/></Sequence>
<Sequence name="06 Sala de exames" from={Math.round(31.2*fps)} durationInFrames={Math.round(6.85*fps)} premountFor={fps}><Institutional preview={preview} title="PRESENTE COM VOCÊ." message="" source="sala-exame.mp4" trimSeconds={6} speed={.8}/></Sequence>
<Sequence name="07 Apoio entre mulheres • ilustração" from={Math.round(37.6*fps)} durationInFrames={Math.round(6.95*fps)} premountFor={fps}><MotionScene kind="support" title="CUIDE-SE."/></Sequence>
<Sequence name="08 CTA • motion" from={Math.round(44.1*fps)} durationInFrames={Math.round(5.65*fps)} premountFor={fps}><MotionScene kind="cta" title="FALE COM
A NOSSA EQUIPE."/></Sequence>
<Sequence name="07 Assinatura da locução" from={Math.round(49.3*fps)} durationInFrames={1621-Math.round(49.3*fps)+15} premountFor={fps}><Signature/></Sequence>
<Sequence name="08 Pacote 01" from={1621} durationInFrames={10*fps+15} premountFor={fps}><PackageCard number="01" services={['Ultrassom de mama','Papanicolau','Consulta com ginecologista']} price="300,00" installments="3x"/></Sequence>
<Sequence name="09 Pacote 02" from={1621+10*fps} durationInFrames={11*fps+15} premountFor={fps}><PackageCard number="02" services={['Ultrassom de mama','Papanicolau','Mamografia','Consulta com ginecologista']} price="400,00" installments="4x"/></Sequence>
<Sequence name="10 Pacote 03" from={1621+21*fps} durationInFrames={12*fps+15} premountFor={fps}><PackageCard number="03" services={['Ultrassom de mama','Ultrassom endovaginal','Papanicolau','Mamografia','Consulta com ginecologista']} price="500,00" installments="5x"/></Sequence>
<Sequence name="11 Encerramento • WhatsApp" from={1621+33*fps} durationInFrames={7*fps} premountFor={fps}><Ending/></Sequence>
<Sequence name="Locução integral + legendas" durationInFrames={1621} premountFor={fps}><Narration/></Sequence>
<BrandHeader/>
</AbsoluteFill>};
const PackagePreview=(props:ComponentProps<typeof PackageCard>)=><AbsoluteFill><PackageCard {...props}/><BrandHeader/></AbsoluteFill>;
const EndingPreview=()=> <AbsoluteFill><Ending/><BrandHeader/></AbsoluteFill>;
export const Root=()=> <>
<Composition id="Partmed-Outubro-Rosa" component={Timeline} width={1080} height={1920} fps={30} durationInFrames={2821} defaultProps={{preview:false}}/>
<Composition id="Pacote-01" component={PackagePreview} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{number:'01',services:['Ultrassom de mama','Papanicolau','Consulta com ginecologista'],price:'300,00',installments:'3x'}}/>
<Composition id="Pacote-02" component={PackagePreview} width={1080} height={1920} fps={30} durationInFrames={330} defaultProps={{number:'02',services:['Ultrassom de mama','Papanicolau','Mamografia','Consulta com ginecologista'],price:'400,00',installments:'4x'}}/>
<Composition id="Pacote-03" component={PackagePreview} width={1080} height={1920} fps={30} durationInFrames={360} defaultProps={{number:'03',services:['Ultrassom de mama','Ultrassom endovaginal','Papanicolau','Mamografia','Consulta com ginecologista'],price:'500,00',installments:'5x'}}/>
<Composition id="Encerramento" component={EndingPreview} width={1080} height={1920} fps={30} durationInFrames={210}/>
</>;
