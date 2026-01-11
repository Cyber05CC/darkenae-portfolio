import React, { useState } from 'react';
import { ArrowRight, Key, Check, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://formsubmit.co/ajax/darkenae2005@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Inquiry from ${formData.name}`,
                    _template: 'table',
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-primary rounded-[32px] p-8 md:p-16 shadow-lg shadow-primary/20 text-white relative overflow-hidden min-h-[70vh] flex flex-col justify-center"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Column: Text */}
                <div>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-8 shadow-md">
                        <Key size={24} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Ready to start your next project with visuals that{' '}
                        <span className="text-white/70">actually convert?</span>
                    </h2>

                    <p className="text-white/80 text-lg mb-10 leading-relaxed">
                        If you would like to work with me on your project, feel free to contact me!
                    </p>

                    <p className="mt-8 text-sm text-white/50">
                        Or email me directly at{' '}
                        <a
                            href="mailto:darkenae2005@gmail.com"
                            className="text-white font-bold hover:underline transition-all duration-300"
                        >
                            darkenae2005@gmail.com
                        </a>
                    </p>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[24px] border border-white/10">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-xl px-6 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 ease-out disabled:opacity-70"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-xl px-6 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 ease-out disabled:opacity-70"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={4}
                                required
                                disabled={isSubmitting}
                                className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-xl px-6 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all duration-300 ease-out disabled:opacity-70"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-bold text-lg rounded-xl py-4 transition-all duration-500 ease-out flex items-center justify-center gap-2 group relative overflow-hidden ${
                                submitStatus === 'success'
                                    ? 'bg-green-500 text-white'
                                    : submitStatus === 'error'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-black text-white hover:bg-gray-900'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <Check size={20} />
                                    Message Sent!
                                </>
                            ) : submitStatus === 'error' ? (
                                <>
                                    <AlertCircle size={20} />
                                    Try Again
                                </>
                            ) : (
                                <>
                                    Send Request
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform duration-500 ease-out"
                                    />
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="text-green-300 text-sm text-center font-medium animate-pulse">
                                Thanks! I'll get back to you soon.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-300 text-sm text-center font-medium">
                                Something went wrong. Please try emailing directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
