/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import "./select.css";
import { DataInfoType } from "../data.types";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ICONS
export default function BotInfo(
    { 
        info: { code, description, technical },
        open,
        setOpen
    } : { 
        info: DataInfoType,
        open: boolean,
        setOpen: (value: string) => void
    }
) {
    const popupRef = useRef<any>(null);
    const [select, setSelect] = useState('description');

    const handleClickOutside = (event: any) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setOpen('');
        }
    };
    
    // Adiciona ou remove o evento de clique global
    useEffect(() => {
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <>
            {
                open && 
                <div ref={popupRef} className="fixed w-96 bg-background-primary z-30 border border-background-secondaryDarkBig rounded-md">
                    <ul className="grid grid-cols-3">
                        <li className={`rounded-md border-b border-background-secondaryDarkBig font-bold flex items-center justify-center p-2 ${select === 'description' && 'bg-background-decoration text-text-ligth' }`} onClick={() => setSelect('description')}>
                            <p>Descrição</p>
                        </li>
                        {
                            code && <li className={`rounded-md border-b border-background-secondaryDarkBig font-bold flex items-center justify-center p-2 ${select === 'code' && 'bg-background-decoration text-text-ligth' }`} onClick={() => setSelect('code')}>
                                <p>Código</p>
                            </li>
                        }
                        
                        {
                            technical && <li className={`rounded-md border-b border-background-secondaryDarkBig font-bold flex items-center justify-center p-2 ${select === 'technical' && 'bg-background-decoration text-text-ligth' }`} onClick={() => setSelect('technical')}>
                                <p>Inf. Técnicas</p>
                            </li>
                        }
                    </ul>
                    <div className="p-2 overflow-y-auto h-80">
                        {
                            select === "description" && <p>{description}</p>
                        }
                        {
                            select === "code" && code && <SyntaxHighlighter language="javascript" style={dracula} className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-auto">
                                {code.body}
                            </SyntaxHighlighter>
                        }
                        {
                            select === "technical" && technical && <p>{technical}</p>
                        }
                    </div>
                </div>
            }
        </>
    )
}
