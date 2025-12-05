const Footer = () => {
    return (
        <footer className="py-8 mt-12 border-t border-neutral-100">
            <div className="flex justify-between items-center text-xs text-neutral-400">
                <p>© {new Date().getFullYear()} Swadeep Dhondi</p>
                <p>Built with React & Tailwind</p>
            </div>
        </footer>
    );
};

export default Footer;
