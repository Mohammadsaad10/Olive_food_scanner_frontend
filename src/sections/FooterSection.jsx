import Container from "../layout/Container";

const FooterSection = () => {
  return (
    <footer className="pb-10">
      <Container className="rounded-3xl bg-[#386641] p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Foods</li>
              <li>Allergy Scanner</li>
              <li>Gluten-Free Scanner</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">About</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Blog</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-3 text-sm text-white/80">
              Get the latest updates and lab-testing insights in your inbox.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/70">
          © 2026 Olive Inc.
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;
