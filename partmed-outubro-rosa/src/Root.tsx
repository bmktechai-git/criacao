import {AbsoluteFill, Composition, Sequence, staticFile, useVideoConfig} from 'remotion';
import {Audio} from '@remotion/media';
import {Seal} from './Brand';
import {Institutional} from './Institutional';
import {PackageCard} from './PackageCard';
import {Ending} from './Ending';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/latin-700.css';
import '@fontsource/montserrat/latin-800.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
const Timeline=({preview=false}:{preview?:boolean})=>{const {fps}=useVideoConfig();return <AbsoluteFill>
<Audio src={staticFile('Partmed_audio1.ogg')} premountFor={fps}/>
<Sequence name="01 Fachada • cuidado" from={0} durationInFrames={Math.round(8.85*fps)} premountFor={fps}><Institutional preview={preview} title="Cuidar de você é um ato de amor." message="Outubro chegou. Um convite para olhar com carinho para a sua saúde." source="fachada.mp4" speed={1}/></Sequence>
<Sequence name="02 Recepção • conscientização" from={Math.round(8.4*fps)} durationInFrames={Math.round(9.75*fps)} premountFor={fps}><Institutional preview={preview} title="Prevenção começa com informação." message="Outubro Rosa: conscientização e diagnóstico precoce do câncer de mama." source="recepcao.mp4" trimSeconds={0} speed={1}/></Sequence>
<Sequence name="03 Setor de exames • autocuidado" from={Math.round(17.7*fps)} durationInFrames={Math.round(13.95*fps)} premountFor={fps}><Institutional preview={preview} title="Olhe para você. Conheça seu corpo." message="Mantenha seus cuidados de saúde em dia. O cuidado pode fazer a diferença." source="sala-exame.mp4" trimSeconds={0} speed={.72}/></Sequence>
<Sequence name="04 Ambientes reais • institucional" from={Math.round(31.2*fps)} durationInFrames={Math.round(6.85*fps)} premountFor={fps}><Institutional preview={preview} title="Presente em cada etapa da sua vida." message="Na Partmed, cuidado, acolhimento e atenção à sua saúde." source="sala-exame.mp4" trimSeconds={5.6} speed={.8}/></Sequence>
<Sequence name="05 Recepção • prevenção" from={Math.round(37.6*fps)} durationInFrames={Math.round(6.95*fps)} premountFor={fps}><Institutional preview={preview} title="Cuide-se. Previna-se. Incentive." message="Neste Outubro Rosa, compartilhe cuidado com outras mulheres." source="recepcao.mp4" trimSeconds={11.8} speed={.9}/></Sequence>
<Sequence name="06 CTA • pacotes especiais" from={Math.round(44.1*fps)} durationInFrames={Math.round(5.65*fps)} premountFor={fps}><Institutional preview={preview} title="Converse com a nossa equipe." message="Conheça os pacotes especiais de Outubro Rosa. WhatsApp: (17) 99138-0637." source="sala-exame.mp4" trimSeconds={6} speed={.85}/></Sequence>
<Sequence name="07 Assinatura da locução" from={Math.round(49.3*fps)} durationInFrames={1621-Math.round(49.3*fps)+15} premountFor={fps}><Ending/></Sequence>
<Sequence name="08 Pacote 01" from={1621} durationInFrames={10*fps+15} premountFor={fps}><PackageCard number="01" services={['Ultrassom de mama','Papanicolau','Consulta com ginecologista']} price="300,00" installments="3x"/></Sequence>
<Sequence name="09 Pacote 02" from={1621+10*fps} durationInFrames={11*fps+15} premountFor={fps}><PackageCard number="02" services={['Ultrassom de mama','Papanicolau','Mamografia','Consulta com ginecologista']} price="400,00" installments="4x"/></Sequence>
<Sequence name="10 Pacote 03" from={1621+21*fps} durationInFrames={12*fps+15} premountFor={fps}><PackageCard number="03" services={['Ultrassom de mama','Ultrassom endovaginal','Papanicolau','Mamografia','Consulta com ginecologista']} price="500,00" installments="5x"/></Sequence>
<Sequence name="11 Encerramento • WhatsApp" from={1621+33*fps} durationInFrames={7*fps} premountFor={fps}><Ending/></Sequence>
<Seal/>
</AbsoluteFill>};
export const Root=()=> <>
<Composition id="Partmed-Outubro-Rosa" component={Timeline} width={1080} height={1920} fps={30} durationInFrames={2821} defaultProps={{preview:false}}/>
<Composition id="Pacote-01" component={PackageCard} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{number:'01',services:['Ultrassom de mama','Papanicolau','Consulta com ginecologista'],price:'300,00',installments:'3x'}}/>
<Composition id="Pacote-02" component={PackageCard} width={1080} height={1920} fps={30} durationInFrames={330} defaultProps={{number:'02',services:['Ultrassom de mama','Papanicolau','Mamografia','Consulta com ginecologista'],price:'400,00',installments:'4x'}}/>
<Composition id="Pacote-03" component={PackageCard} width={1080} height={1920} fps={30} durationInFrames={360} defaultProps={{number:'03',services:['Ultrassom de mama','Ultrassom endovaginal','Papanicolau','Mamografia','Consulta com ginecologista'],price:'500,00',installments:'5x'}}/>
<Composition id="Encerramento" component={Ending} width={1080} height={1920} fps={30} durationInFrames={210}/>
</>;
