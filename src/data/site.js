export const bookingUrl = 'https://www.booking.com/hotel/es/vita-verde.es.html';
export const tourismUrl = 'https://turismo.torrevieja.es/es/poi/vita-verde-hostal-boutique';
export const mapsUrl = 'https://maps.google.com/?q=Calle+San+Pascual+175,+03181+Torrevieja,+Alicante,+Spain';
export const realPhotos = [
  { src: 'https://turismo.torrevieja.es/sites/default/files/styles/hero_cabecera/public/2026-04/Vita%20Verde%20Torrevieja%20%283%29.jpg.webp?itok=lBZVmpRW', alt: 'Fachada de Vita Verde Hostal Boutique' },
  { src: 'https://turismo.torrevieja.es/sites/default/files/2026-04/Vita%20Verde%20Torrevieja%20%285%29_0.jpg', alt: 'Imagen del alojamiento Vita Verde' },
  { src: 'https://turismo.torrevieja.es/sites/default/files/2026-04/Vita%20Verde%20Torrevieja%20%284%29_0.jpg', alt: 'Patio de Vita Verde' },
  { src: 'https://turismo.torrevieja.es/sites/default/files/2026-04/Vita%20Verde%20Torrevieja%20%283%29_1.jpg', alt: 'Exterior de Vita Verde Hostal Boutique' },
  { src: 'https://a.hwstatic.com/image/upload/e_trim%2Cc_fill%2Cw_1400%2Ch_950%2Cf_auto%2Cq_auto/propertyimages/3/336485/jpbkmgvutyahwjqqbzbw.jpg', alt: 'Habitación de Vita Verde' },
  { src: 'https://turismo.torrevieja.es/sites/default/files/2026-04/Vita%20Verde%20Torrevieja%20%281%29_0.jpg', alt: 'Habitación de Vita Verde' },
];
export const roomCategories = {
  es: [
    ['Habitación doble', '1 cama doble grande'], ['Doble económica', '1 cama doble'], ['Doble adaptada', '1 cama doble'],
    ['Habitación triple', '1 cama individual y 1 doble grande'], ['Habitación familiar', '2 camas individuales y 1 doble grande'],
    ['Junior suite', '1 cama doble extragrande'], ['Suite con balcón', '1 cama doble grande'], ['Suite con terraza', '1 cama doble extragrande y sofá cama'],
  ],
  en: [
    ['Double Room', '1 large double bed'], ['Budget Double Room', '1 double bed'], ['Double Room · Disability Access', '1 double bed'],
    ['Triple Room', '1 single bed and 1 large double bed'], ['Family Room', '2 single beds and 1 large double bed'],
    ['Junior Suite', '1 extra-large double bed'], ['Suite with Balcony', '1 large double bed'], ['Suite with Terrace', '1 extra-large double bed and sofa bed'],
  ],
};

export const copy = {
  es: {
    lang: 'es-ES', locale: 'Español', otherLocale: 'EN', otherHref: '/en/',
    nav: ['Inicio', 'Habitaciones', 'Experiencia', 'Ubicación', 'Contacto'],
    paths: ['/es/', '/es/habitaciones/', '/es/experiencia/', '/es/ubicacion/', '/es/contacto/'],
    availability: 'Ver disponibilidad', explore: 'Explorar habitaciones', book: 'Ver en Booking.com',
    heroTitle: 'Torrevieja, <i>a tu ritmo.</i>',
    roomsTitle: 'Elige tu habitación.', roomsText: 'Ocho categorías aparecen en el anuncio. Consulta la disponibilidad y la distribución actual antes de reservar.',
    roomLink: 'Ver disponibilidad',
    essenceTitle: 'Una estancia tranquila.<br/><i>Todo cerca.</i>',
    essenceText: 'Vita Verde está en el centro de Torrevieja, en una calle tranquila y cerca de los servicios de la ciudad.',
    story: 'Descubrir la experiencia',
    comfortTitle: 'Detalles para una estancia mejor.',
    comforts: ['Aire acondicionado', 'Wi-Fi gratis', 'Baño privado', 'Hervidor de agua', 'Cafetera', 'Minibar', 'TV y aislamiento acústico', 'Terraza solárium', 'Habitaciones accesibles', 'Check-in/out privado'],
    destinationTitle: 'El centro y el mar, cerca.',
    footerNote: 'Presentación privada para los propietarios. Propuesta independiente, no es la web oficial.', source: 'Ficha municipal',
    bookingFacts: 'Puntuación en Booking.com consultada el 12/10/2026: 8,9/10. Puede cambiar.', conceptPhotoNote: 'Imagen ilustrativa generada con IA. No es una foto de Torrevieja.',
    contact: { phone: '+34 611 978 571', email: 'vitaverde.torrevieja@gmail.com', hours: 'Recepción: 09:00-18:00', languages: 'Atención en español, inglés, ruso y ucraniano.' },
    policies: [['Entrada', '14:00-23:30. Informa al alojamiento de tu hora de llegada. La recepción publicada abre de 09:00 a 18:00; confirma cómo acceder fuera de ese horario.'], ['Salida', '09:00-11:00'], ['Depósito', '50 € reembolsables para estancias de una noche. No se indica depósito para estancias de dos noches o más.'], ['Familias', 'Se admiten niños de cualquier edad. No hay cunas ni camas supletorias.'], ['Mascotas y eventos', 'No se admiten mascotas ni se permiten fiestas o eventos.'], ['Pago y cancelación', 'Se requiere documento de identidad y tarjeta. La cancelación depende de la tarifa elegida.'], ['Servicios bajo consulta', 'La ficha menciona aparcamiento y traslado al aeropuerto. Confirma disponibilidad, precio y condiciones.']],
    pages: {
      rooms: { title: 'Elige tu habitación.', text: 'Ocho categorías publicadas en Booking.com. Consulta disponibilidad y distribución actual antes de reservar.' },
      experience: { title: 'Lo necesario para descansar.', text: 'Aire acondicionado, Wi-Fi gratis, baño privado y más comodidades publicadas para tu estancia.' },
      location: { title: 'El centro y el mar, cerca.', text: 'Calle San Pascual, 175. Playa del Acequión a menos de 1 km y aeropuerto de Alicante-Elche a unos 41 km.' },
      contact: { title: 'Contacta con Vita Verde.', text: 'Consulta disponibilidad, tarifas y condiciones actuales directamente con el alojamiento.' },
    },
    pageNames: { rooms: 'Habitaciones', experience: 'Experiencia', location: 'Ubicación', contact: 'Contacto' },
  },
  en: {
    lang: 'en', locale: 'English', otherLocale: 'ES', otherHref: '/es/',
    nav: ['Home', 'Rooms', 'Experience', 'Location', 'Contact'],
    paths: ['/en/', '/en/rooms/', '/en/experience/', '/en/location/', '/en/contact/'],
    availability: 'Check availability', explore: 'Explore rooms', book: 'View on Booking.com',
    heroTitle: 'A quieter side of <i>Torrevieja.</i>',
    roomsTitle: 'Choose your room.', roomsText: 'Eight categories appear on the listing. Check current availability and room layout before booking.',
    roomLink: 'Check availability',
    essenceTitle: 'A calmer stay.<br/><i>Close to it all.</i>',
    essenceText: 'Vita Verde sits in central Torrevieja on a quieter street, close to the city’s everyday services.',
    story: 'Discover the experience',
    comfortTitle: 'Details for a better stay.',
    comforts: ['Air conditioning', 'Free Wi-Fi', 'Private bathroom', 'Kettle', 'Coffee maker', 'Minibar', 'TV and sound insulation', 'Sun terrace', 'Accessible rooms', 'Private check-in/out'],
    destinationTitle: 'The centre and coast, close by.',
    footerNote: 'Private presentation for the owners. Independent proposal, not the official website.', source: 'Municipal listing',
    bookingFacts: 'Booking.com guest score checked 12 Oct 2026: 8.9/10. It may change.', conceptPhotoNote: 'AI-generated illustrative image. It is not a photograph of Torrevieja.',
    contact: { phone: '+34 611 978 571', email: 'vitaverde.torrevieja@gmail.com', hours: 'Reception: 09:00-18:00', languages: 'Service in Spanish, English, Russian and Ukrainian.' },
    policies: [['Check-in', '14:00-23:30. Tell the property your arrival time. Published reception hours are 09:00-18:00; confirm how to access the property outside those hours.'], ['Check-out', '09:00-11:00'], ['Deposit', 'A €50 refundable deposit applies to one-night stays. No deposit is listed for stays of two nights or more.'], ['Families', 'Children of any age are welcome. No cots or extra beds are available.'], ['Pets and events', 'Pets, parties and events are not allowed.'], ['Payment and cancellation', 'Photo ID and a credit card are required. Cancellation depends on the selected rate.'], ['Ask the property', 'The listing mentions parking and airport transfer. Confirm availability, cost and terms.']],
    pages: {
      rooms: { title: 'Choose your room.', text: 'Eight room categories are listed on Booking.com. Check current availability and layout before booking.' },
      experience: { title: 'Comfort for a restful stay.', text: 'Air conditioning, free Wi-Fi, private bathrooms and other published amenities for your stay.' },
      location: { title: 'The centre and coast, close by.', text: 'Calle San Pascual, 175. Acequión Beach is under 1 km away and Alicante-Elche Airport is about 41 km away.' },
      contact: { title: 'Contact Vita Verde.', text: 'Ask the property directly about current availability, rates and stay conditions.' },
    },
    pageNames: { rooms: 'Rooms', experience: 'Experience', location: 'Location', contact: 'Contact' },
  },
};
