'use client'

import { ReactElement } from 'react';
import { Button, useToast } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';


export const DownloadCurriculumButton = (): ReactElement => {
    const toast = useToast()

    const handleSave = async () => {
        try {
            const encodedData = await fetch(`/api/curriculum`)
            const data = await encodedData.blob()

            saveAs(data, 'Full-stack curriculum - Gabriel Botelho Malenowitch.pdf')
            window.open(URL.createObjectURL(data));
        } catch (error) {
            console.error(error)

            const toastId = toast({ 
                description: 'We have a problem 😔. Try again latter! (please 💚)',
                status: 'error',
            })
            
            setTimeout(() => toast.close(toastId), 2000)
        }
        
    }
    
    return (
        <Button onClick={handleSave} colorScheme="cyan" variant="outline" style={{ 
            borderRadius: '64px',
            width: '48px',
            height: '48px',
        }}>
            <DownloadRoundedIcon/>
        </Button>
    )
}