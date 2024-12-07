'use client'

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/animated-modal"; 

interface propsType {
    ModalTriggerButtonText: string;
    ModalTriggerButtonOnHover: React.ReactNode;
    ModalTitle: string;
    ModalDescription: React.ReactNode;
    ModalFooter: React.ReactNode;
}

export default function DashboardModal(props: propsType) {
    return (
        <div className="py-40 flex items-center justify-center z-50">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        {props.ModalTriggerButtonText}
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        {props.ModalTriggerButtonOnHover}
                    </div>
                </ModalTrigger>

                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            {props.ModalTitle}
                        </h4>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                            <div className="flex items-center justify-center">
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    {props.ModalDescription}
                                </span>
                            </div>
                        </div>
                    </ModalContent>

                    <ModalFooter className="gap-4">
                        {props.ModalFooter}
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}