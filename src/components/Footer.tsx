const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CDL Connect. Proudly connecting CDL-A drivers with carriers across the U.S.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
