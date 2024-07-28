const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Adquisición. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
