"use client";

import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { SparkleIcon, SparklesIcon } from 'lucide-react';
import {useUserRole} from '@/hooks/useUserRole';

function DashboardBtn()  {
    //const isCandidate = false;
    //const isInterviewer = true; //dashboard can be seen only for interviewe
    const { isCandidate, isLoading } = useUserRole(); // Assuming you have a custom hook to get user role

    if (isCandidate || isLoading) return null;

    return (
        <Link href={"/dashboard"}>
            <Button className='gap-2 font-medium' size={"sm"} >
                <SparklesIcon className='size-4'/>
                Dashboard
            </Button>
        </Link>
    )
}

export default DashboardBtn
