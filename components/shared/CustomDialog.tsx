import React from 'react'
import { Dialog, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import { CrossIcon } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

interface CustomDialogProps {
    children: React.ReactNode;
    title: string;
    description: string;
    trigger: React.ReactNode;
}

const CustomDialog = ({ children, title = "", description = "", trigger }: CustomDialogProps) => {
    return (
        <div>
            <div className="hidden md:flex flex-col justify-center items-center min-h-full">
                {/* Desktop View */}
                <Dialog>
                    <DialogTrigger className="btn btn-primary">
                        {trigger}
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            {children}
                        </div>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant={"ghost"}>
                                    <CrossIcon />
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col justify-center items-center min-h-full">
                <Sheet>
                    <SheetTrigger>
                        {trigger}
                    </SheetTrigger>
                    <SheetContent side='bottom' className="sm:max-w-lg sm:w-full">
                        <SheetHeader>
                            <SheetTitle>{title}</SheetTitle>
                            <SheetDescription>{description}</SheetDescription>
                        </SheetHeader>
                        <div className="mt-4">
                            {children}
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button variant={"ghost"} asChild>
                                <SheetClose>
                                    <CrossIcon />
                                </SheetClose>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default CustomDialog