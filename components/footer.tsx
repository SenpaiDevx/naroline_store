import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear : number = new Date().getFullYear();

    return (
        <>
            <footer className="border-t">
                <div className="p-5 flex-center">
                    {currentYear} {APP_NAME} . ALl hail nazi!!! 2025-9999.
                </div>
            </footer>
        </>
    );
}

export default Footer;