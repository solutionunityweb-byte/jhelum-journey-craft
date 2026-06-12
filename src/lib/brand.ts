export const BRAND = {
  name: "JAK Tour & Travels",
  tagline: "Explore Paradise with Trusted Kashmir Travel Experts",
  whatsappNumber: "+91 700604169",
  whatsapp: "https://wa.me/91700604169",
  callNumbers: ["+91 7006983464", "+91 9103248988"],
  phonePrimary: "+91 7006983464",
  tel: "tel:+917006983464",
  phones: ["+91 700604169", "+91 7006983464", "+91 9103248988"],
  emails: ["jaktourandtravelsreservation@gmail.com", "simransimu7700@gmail.com"],
  address: "Central Market, Abi Guzar, Srinagar, Jammu & Kashmir – 190001",
  regNo: "JKRTA00000941",
  gst: "01AFZPD8002R1Z2",
};

export function waLinkWithMessage(message: string) {
  return `${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
