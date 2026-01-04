function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-50 to-blue-100">
      <header className="container mx-auto px-8 py-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl mb-2" style={{ fontFamily: 'The Youngest, serif' }}>
              Dung Nguyen
            </h1>
            <p className="text-xl" style={{ fontFamily: 'The Youngest, serif' }}>
              My personal website
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a
      href="https://www.instagram.com/_damchomaynhat_1804/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70"
    >

                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
      href="https://web.facebook.com/nguyen.inh.minh.dung.76095/?_rdc=1&_rdr#"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70"
    >

                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
      href="https://www.linkedin.com/in/dung-nguyen-977289398/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-70"
    >

                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <nav className="flex gap-6 text-lg">
              <a
                href="https://gsanan.github.io/dungabout/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                style={{ fontFamily: 'The Youngest, serif' }}
              >
                About
              </a>
              <a
                href="https://gsanan.github.io/dungwriting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                style={{ fontFamily: 'The Youngest, serif' }}
              >
                Writing
              </a>
            </nav>
          </div>
        </div>
      </header>  
      
      <main className="container mx-auto px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
            About me
          </h2>
          <p className="text-base leading-relaxed max-w-3xl" style={{ fontFamily: 'The Youngest, serif' }}>
            My full name is Nguyễn Đình Minh Dũng, and the name in English should be Dung Nguyen. I am currently a senior at Foreign Language Specialized School (FLSS), where I was member of the Chinese (Chuyên Trung) class for my high school. I am looking forward to pursuing a career in History and Economics, combining economics framework with past memory.
          </p>
        </section>

        <div className="flex justify-center mb-16">
          <div className="w-96 h-px bg-gray-800"></div>
        </div>

        <section>
          <h2 className="text-3xl mb-8" style={{ fontFamily: 'The Youngest, serif' }}>
            Experience
          </h2>

          <div className="mb-12">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
              <a
                href="https://www.ijfmr.com/research-paper.php?id=57838"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
              >
                Student Researcher
              </a>{' '}
              at RISE Global Program
            </h3>
            <p className="text-base leading-relaxed max-w-4xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
              This marked my first exposure to academic research and behavioral economics. Under the mentorship by a PhD candidate from Cornell University, I spent 4 months conducting a research about Vietnamese's willingness to pay for museum services, including entrance fee and extra tickets to more interactive and premium exhibitions. I designed a 15-question survey with 65 responses, distributed through both online and offline channels, specifically targeted visitors at the Temple of Literature and Vietnam Military History Museum. Using the kernel density plot and pie charts, I underscored that WTP is not merely a static economic measure but a dynamic construct that is shaped by psychological cues, cultural expectations and policy interventions.
            </p>

            <div className="flex gap-6 mb-4">
              <img
                src="https://raw.githubusercontent.com/dungnguyen1804/Portfolio-image/main/Second%20image%20in%20slide%202%20in%20Autobiography%20page.jpg"
                alt="Kernel density plot of WTP to museum"
                className="w-80 h-auto object-contain"
              />
              <img
                src="https://raw.githubusercontent.com/dungnguyen1804/Portfolio-image/main/First%20image%20in%20slide%202%20in%20Autobiography%20page.jpg"
                alt="Maximum payment capacity chart"
                className="w-80 h-auto object-contain"
              />
            </div>

            <p className="text-sm italic" style={{ fontFamily: 'The Youngest, serif' }}>
              (Kernel density plot of WTP to museum and maximum payment capacity of visitors)
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'The Youngest, serif' }}>
              <a
                href="https://www.bu.edu/summer/high-school-programs/academic-immersion/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
              >
                Boston University Academic Immersion (AIM)
              </a>
              : Business
            </h3>
            <p className="text-base leading-relaxed max-w-4xl mb-6" style={{ fontFamily: 'The Youngest, serif' }}>
              This selective summer program is offered in partnership with BU's <span className="underline">Questrom School of Business</span>, a top 20 undergraduate business program, and focuses on entrepreneurship and business strategy. There, I collaborated in a 6-member team to design and pitch a high-tech water bottle that connected with smartphones to track hydration and user health and took responsible for defining market segmentation and a 3-year implementation plan to assess the project's financial viability and growth potential.
            </p>

            <div className="flex gap-6">
              <div className="flex flex-col gap-6">
                <img
                  src="https://raw.githubusercontent.com/dungnguyen1804/Portfolio-image/main/First%20image%20in%20slide%203%20in%20Autobiography%20page.jpg"
                  alt="Boston University classroom"
                  className="w-72 h-auto object-cover"
                />
                <img
                  src="https://raw.githubusercontent.com/dungnguyen1804/Portfolio-image/main/Third%20image%20in%20slide%203%20in%20Autobiography%20page.jpg"
                  alt="Group photo"
                  className="w-72 h-auto object-cover"
                />
              </div>
              <img
                src="https://raw.githubusercontent.com/dungnguyen1804/Portfolio-image/main/Second%20image%20in%20slide%203%20in%20Autobiography%20page.jpg"
                alt="University building interior"
                className="w-96 h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
