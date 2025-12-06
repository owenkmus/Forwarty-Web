export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
   {
    id: "blog-1",
    description: "Un almacén futurista con robots autónomos, AGVs y paneles digitales mostrando análisis de IA.",
    imageUrl: "/images/blog-news/blog1.jpg",
    imageHint: "futuristic logistics warehouse with AI and robots"
  },
  {
    id: "blog-2",
    description: "Contenedores de carga conectados digitalmente mostrando una red blockchain global.",
    imageUrl: "/images/blog-news/blog2.jpg",
    imageHint: "blockchain connected shipping containers"
  },
  {
    id: "news-1",
    description: "Centro de control con pantallas mostrando tracking en tiempo real y análisis predictivo.",
    imageUrl: "/images/blog-news/news1.jpg",
    imageHint: "real-time logistics predictive analytics control room"
  },
  {
    id: "news-2",
    description: "Documentos digitales y un mapa holográfico representando el comercio internacional digitalizado.",
    imageUrl: "/images/blog-news/news2.jpg",
    imageHint: "digital trade documents over holographic world map"
  }
];
