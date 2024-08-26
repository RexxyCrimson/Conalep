import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium dark:text-blue-500">Borrar cuenta</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Una vez que tu perfil se elimine se borrara toda tu información,
                    descarga o respalda antes tu información para conservar.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Borrar cuenta</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium dark:text-blue-500">
                        ¿Estas seguro de borrar la cuenta?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Una vez que tu perfil se elimine se borrara toda tu información,
                        descarga o respalda antes tu información para conservar.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password_modal" value="Contraseña actual" className="sr-only text-sm text-gray-500 dark:text-gray-400" />

                        <TextInput
                            id="password_modal"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Borrar cuenta
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
