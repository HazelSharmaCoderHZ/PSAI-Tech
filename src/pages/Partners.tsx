import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

/* ========== PARTNER LOGOS ========== */
import hpe from '@/assets/images/partners/hpe.png';
import tcs from '@/assets/images/partners/tcs.png';
import microsoft from '@/assets/images/partners/microsoft.png';
import intel from '@/assets/images/partners/intel.png';
import samsung from '@/assets/images/partners/samsung.png';
import dlink from '@/assets/images/partners/dlink.png';
import cisco from '@/assets/images/partners/cisco.png';
import epson from '@/assets/images/partners/epson.png';

/* ========== CLIENT LOGOS ========== */
import c1 from '@/assets/images/clients/c1.png';
import c2 from '@/assets/images/clients/c2.png';
import c3 from '@/assets/images/clients/c3.png';
import c4 from '@/assets/images/clients/c4.png';
import c5 from '@/assets/images/clients/c5.png';
import c6 from '@/assets/images/clients/c6.png';
import c7 from '@/assets/images/clients/c7.png';
import c8 from '@/assets/images/clients/c8.png';
import c9 from '@/assets/images/clients/c9.png';
import c10 from '@/assets/images/clients/c10.png';
import c11 from '@/assets/images/clients/c11.png';
import c12 from '@/assets/images/clients/c12.png';

/* ========== DATA ========== */

const partners = [
  {
    name: 'Hewlett Packard Enterprise',
    logo: hpe,
    desc: 'Hewlett Packard Enterprise Value Partner',
  },
  {
    name: 'Tata Consultancy Services',
    logo: tcs,
    desc: 'TCS Implementation Partner',
  },
  {
    name: 'Microsoft',
    logo: microsoft,
    desc: 'Microsoft Value Partner',
  },
  {
    name: 'Intel',
    logo: intel,
    desc: 'Intel Software & Technology Provider',
  },
  {
    name: 'Samsung',
    logo: samsung,
    desc: 'Samsung Valuable Partner',
  },
  {
    name: 'D-Link',
    logo: dlink,
    desc: 'D-Link Implementation Partner',
  },
  {
    name: 'Cisco',
    logo: cisco,
    desc: 'Cisco Implementation Partner',
  },
  {
    name: 'Epson',
    logo: epson,
    desc: 'EPSON Implementation Partner',
  },
];

const clients = [
  { name: 'Client 1', logo: c1 },
  { name: 'Client 2', logo: c2 },
  { name: 'Client 3', logo: c3 },
  { name: 'Client 4', logo: c4 },
  { name: 'Client 5', logo: c5 },
  { name: 'Client 6', logo: c6 },
  { name: 'Client 7', logo: c7 },
  { name: 'Client 8', logo: c8 },
  { name: 'Client 9', logo: c9 },
  { name: 'Client 10', logo: c10 },
  { name: 'Client 11', logo: c11 },
  { name: 'Client 12', logo: c12 },
];

export default function Partners() {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Partners
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted <span className="gradient-text">Technology Partners</span>
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              We have partnered with the best technology providers in all solution
              areas. Along with software alliances, we deliver professional
              services, system integration, custom development, and consulting.
            </p>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-center mb-10">
              Our Technology Partners
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((item, i) => (
                <motion.div
                  key={`${item.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glow-card p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-16 object-contain mb-4"
                  />

                  <h3 className="font-semibold mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glow-card p-8 mx-12"
          >
            <h2 className="text-2xl font-bold text-center mb-10">
              Our Clientele
            </h2>

            <div className="grid grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-2 items-center">
              {clients.map((client, i) => (
                <motion.div
                  key={`client-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 object-contain grayscale-0 hover:grayscale transition"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
