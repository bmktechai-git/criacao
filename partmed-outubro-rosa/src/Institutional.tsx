import {AbsoluteFill, staticFile, useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {Shell,Logo,Reveal,pink,blue} from './Brand';
type Props={title:string;message:string;source:string;trimSeconds?:number;speed?:number;label?:string;preview?:boolean};
export const Institutional=({title,message,source,trimSeconds=0,speed=1,label='OUTUBRO ROSA • PARTMED',preview=false}:Props)=>{const {fps}=useVideoConfig();return <Shell fadeIn={source!=='fachada.mp4'}><AbsoluteFill>
<Video src={staticFile(preview ? `proxies/${source}` : source)} trimBefore={Math.round(trimSeconds*fps)} playbackRate={speed} muted premountFor={fps} objectFit="contain" style={{position:'absolute',width:'100%',height:'100%'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(0deg, #fff 0%, #ffffffbb 8%, #ffffff00 38%)'}}/>
<div style={{position:'absolute',left:70,right:70,bottom:330}}><Reveal><h1 style={{fontFamily:'Barlow Condensed',fontSize:112,fontWeight:700,lineHeight:1.02,margin:0,color:blue,maxWidth:900}}>{title}</h1></Reveal></div>
</AbsoluteFill></Shell>};
