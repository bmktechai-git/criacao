import {AbsoluteFill, staticFile, useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {Shell,Logo,Reveal,pink,blue} from './Brand';
type Props={title:string;message:string;source:string;trimSeconds?:number;speed?:number;label?:string;preview?:boolean};
export const Institutional=({title,message,source,trimSeconds=0,speed=1,label='OUTUBRO ROSA • PARTMED',preview=false}:Props)=>{const {fps}=useVideoConfig();return <Shell fadeIn={source!=='fachada.mp4'}><AbsoluteFill>
<Video src={staticFile(preview ? `proxies/${source}` : source)} trimBefore={Math.round(trimSeconds*fps)} playbackRate={speed} muted premountFor={fps} objectFit="contain" style={{position:'absolute',width:'100%',height:'100%'}}/>
<div style={{position:'absolute',left:54,top:54,width:240,height:172,borderRadius:36,background:'#ffffffed',display:'flex',alignItems:'center',justifyContent:'center'}}><Logo size={220}/></div>
<div style={{position:'absolute',inset:0,background:'linear-gradient(0deg, #fff 0%, #fff 17%, #ffffffed 27%, #ffffff00 45%)'}}/>
<div style={{position:'absolute',left:70,right:70,bottom:95}}><Reveal><div style={{fontSize:23,fontWeight:800,letterSpacing:3,color:pink}}>{label}</div><h1 style={{fontFamily:'Barlow Condensed',fontSize:99,fontWeight:700,lineHeight:1.04,margin:'24px 0 28px',color:blue}}>{title}</h1></Reveal><Reveal delay={.35}><div style={{width:72,height:5,borderRadius:3,background:pink,marginBottom:27}}/><div style={{fontSize:34,fontWeight:500,lineHeight:1.4,color:blue}}>{message}</div></Reveal></div>
</AbsoluteFill></Shell>};
