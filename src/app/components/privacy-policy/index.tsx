"use client"

import Link from "next/link"

function PrivacyPolicy() {
    return (
        <section>
            <div className="relative w-full dark:bg-darkblack">
                <div className="container">
                    <div className="flex flex-col gap-1.5 py-10 md:py-20">
                        <p>
                            This Privacy Policy explains how personal information about visitors and users of our website ("us", "we", "our") is collected, used, and disclosed. It applies to our website, services, and any related applications, tools, or features that we provide (collectively, the "Services").
                        </p>

                        <p>
                            By using our Services, you consent to the collection, use, storage, and disclosure of your information as described in this Privacy Policy.
                        </p>

                        <p>
                            Our Services may contain links to external websites or services. We are not responsible for the privacy practices or content of those third-party websites. Please review their privacy policies separately.
                        </p>

                        <p>
                            We may update this Privacy Policy from time to time. When changes occur, we will update the "last updated" date at the top of this page. We encourage you to review this Privacy Policy regularly to stay informed about how we handle your information.
                        </p>

                        <div className="my-6">
                            <h4 className="font-semibold">Personal Information Collection</h4>
                            <p className="mt-6">
                                While using our Services, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This may include details such as your name, email address, phone number, and any other data you choose to provide.
                            </p>

                            <p>
                                We do not collect or store sensitive financial information (such as credit card numbers or security codes). All payments, if applicable, are processed securely by third-party providers. Please refer to their respective privacy policies for more information.
                            </p>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">How We Use Your Information</h4>
                            <p className="mt-6">
                                We may use the information you provide to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide, maintain, and improve our Services</li>
                                <li>Respond to inquiries and customer support requests</li>
                                <li>Send updates, newsletters, or promotional content (if you have opted in)</li>
                                <li>Monitor usage and analyze trends to enhance user experience</li>
                            </ul>
                        </div>

                        <div className="my-6">
                            <h4 className="font-semibold">Your Rights</h4>
                            <p className="mt-6">
                                Depending on your location, you may have rights regarding your personal information, including the right to access, update, or delete your data. To exercise these rights, please contact us through the information provided on our website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
