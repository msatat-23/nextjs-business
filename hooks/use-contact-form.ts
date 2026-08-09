'use client';

import { useState } from 'react';
import {
    useForm,
    type SubmitHandler,
} from 'react-hook-form';

import type { ContactFormData } from '@/types';
import { submitContact } from '@/lib/api';

const INITIAL_FORM_DATA: ContactFormData = {
    fullName: '',
    phone: '',
    jobTitle: '',
    email: '',
};

export function useContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const form = useForm<ContactFormData>({
        defaultValues: INITIAL_FORM_DATA,
        mode: 'onSubmit',
    });

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = form;



    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setSubmitError(null);

        try {
            await submitContact(data);

            setSubmitted(true);
            reset(INITIAL_FORM_DATA);

            // Send confirmation email to the user
            fetch('/api/contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'contact',
                    fullName: data.fullName,
                    email: data.email,
                }),
            }).catch((error) => {
                console.error('Confirmation email failed:', error);
            });
        } catch (error) {
            console.error('Contact submission failed:', error);

            const message =
                error instanceof Error
                    ? error.message
                    : 'Failed to submit the contact form. Please try again.';

            setSubmitError(message);
        }
    };




    const submitAnother = () => {
        setSubmitted(false);
        setSubmitError(null);
        reset(INITIAL_FORM_DATA);
    };

    return {
        register,
        control,
        errors,
        isSubmitting,
        submitted,
        submitError,
        handleSubmit,
        onSubmit,
        submitAnother,
    };
}