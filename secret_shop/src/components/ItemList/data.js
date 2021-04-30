/**Data Sample*/
import product1 from "../../images/mackbook.jpg";
import product2 from "../../images/airpods.jpg";
import product3 from "../../images/IpadAir.jpg";
import product4 from "../../images/Macbook Air.jpg";

import product11 from "../../images/LLT.PNG";
import product12 from "../../images/og.PNG";
import product13 from "../../images/route66.png";

import product21 from "../../images/WVFRM.png";
import product22 from "../../images/kmplayer.png";

export const data = [
  {
    img: product1,
    alt: "Mackbook Pro",
    name: "Apple MacBook Pro",
    desc:
      "Apple MacBook Pro con chip Apple M1 (13 pulgadas, 8 GB de RAM, 256 GB de almacenamiento SSD – gris espacial (último modelo)",
    bigDesc: `Chip M1 diseñado por Apple para un salto gigante en CPU, GPU y rendimiento de aprendizaje automático. Haz más con 
      hasta 20 horas de duración de la batería, la más larga jamás en una Mac.
      CPU de 8 núcleos ofrece un rendimiento hasta 2,8 veces más rápido para volar a través de flujos de trabajo más rápido que nunca.
      GPU de 8 núcleos con gráficos hasta 5 veces más rápidos para aplicaciones y juegos de gráficos intensos.
      Motor Neural de 16 núcleos para un aprendizaje avanzado de máquinas.
      8 GB de memoria unificada para que todo lo que haces sea rápido y fluido.
      El almacenamiento SSD superrápido lanza aplicaciones y abre archivos en un instante.`,
    other_img: [product1, product11, product12, product13],
    price: "1300 USD",
  },
  {
    img: product2,
    alt: "Airpods Pro",
    name: "Airpods Pro ",
    desc: "Cancelación de ruido activa para un sonido envolvente ",
    bigDesc: `Cancelación de ruido activa para un sonido envolvente
      Modo de transparencia para escuchar y conectar con el mundo que te rodea
      Tres tamaños de puntas de silicona suaves y cónicas para un ajuste personalizable
      Resistente al sudor y al agua
      EQ adaptable ajusta automáticamente la música a la forma de tu oreja
      Fácil configuración para todos tus dispositivos Apple
      Acceso rápido a Siri diciendo "Hey Siri"
      La funda de carga inalámbrica ofrece más de 24 horas de duración de la batería`,
    other_img: [product2, product21, product22],
    price: "199 USD",
  },

  {
    img: product3,
    alt: "Apple Air Pad",
    name: "Apple Air Pad",
    desc: "Air Pad 2020",
    bigDesc: ``,
    other_img: [product3, product1, product2, product4],
    price: "560 USD",
    buttonText: "See details",
  },
  {
    img: product4,
    alt: "Apple Watch Series 6",
    name: "Apple Watch S6",
    desc: "Apple Watch Series 6",
    bigDesc: `Chip M1 diseñado por Apple para un salto gigante en CPU, GPU y rendimiento de aprendizaje automático. Haz más con 
      hasta 20 horas de duración de la batería, la más larga jamás en una Mac.
      CPU de 8 núcleos ofrece un rendimiento hasta 2,8 veces más rápido para volar a través de flujos de trabajo más rápido que nunca.
      GPU de 8 núcleos con gráficos hasta 5 veces más rápidos para aplicaciones y juegos de gráficos intensos.
      Motor Neural de 16 núcleos para un aprendizaje avanzado de máquinas.
      8 GB de memoria unificada para que todo lo que haces sea rápido y fluido.
      El almacenamiento SSD superrápido lanza aplicaciones y abre archivos en un instante.`,
    other_img: [
      product4,
      product4,
      product4,
      product4,
      product4,
      product4,
      product4,
      product4,
    ],
    price: "399 USD",
    buttonText: "See details",
  },
];
