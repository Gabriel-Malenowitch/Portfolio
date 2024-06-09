'use client'

import { ReactElement, useRef } from 'react';
import { Button, useToast } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';


export const DownloadCurriculumButton = (): ReactElement => {
    const toast = useToast()

    const handleSave = async () => {
        try {
            const encodedData = await fetch(`/api/curriculum`)
            const data = await encodedData.blob()

            saveAs(data, 'Curriculo - Gabriel Botelho Malenowitch.pdf')
            window.open(URL.createObjectURL(data));
        } catch (error) {
            console.error(error)

            const toastId = toast({ 
                description: 'Tivemos um problema ao baixar o documento.',
                status: 'error'
            })
            
            setTimeout(() => toast.close(toastId), 2000)
        }
        
    }
    
    return (
        <Button onClick={handleSave} colorScheme="green">
            Baixar currículo <DownloadRoundedIcon/>
        </Button>
    )
}