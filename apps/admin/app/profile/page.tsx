'use client';
import {Header,ProfileForm,RequireAccount} from '@bbm/shared/src/components';
export default function Page(){return <><Header mode='admin'/><main className='page'><h1 className='page-title'>Profile & settings</h1><RequireAccount kind='studio' admin><ProfileForm/></RequireAccount></main></>}
