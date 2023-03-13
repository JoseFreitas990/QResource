export interface ICode {
  id: number;
  name: string;
  data: string;
  type: string;
  date: Date;
}

// ? string
export interface IText {
  name: string;
}

//  Mailto (W3C standard)
// ? mailto:email@example.com?subject=email?subject&body=Email text
// MATMSG (NTT DoCoMo)
// ? MATMSG:TO: email@example.com;SUB:email;subject;BODY:Email text;;
// SMTP (OMI@)
// ? SMTP:email@example.com:email subject:Email text
export interface IMail {
  to?: string;
  subject?: string;
  body?: string;
}

// ? SMSTO:NUMBER:MESSAGE
export interface ISMS {
  to?: string;
  body?: string;
}

// ? WIFI:S:<SSID>;T:<WEP|WPA|blank>;P:<PASSWORD>;H:<true|false|blank>;;
export interface IWiFi {
  networkType?: string;
  name?: string;
  password?: string;
  hidden: boolean;
}

// ? tel:phone number
export interface IPhone {
  number: string;
}

// BEGIN:VALARM
// TRIGGER:-PT1440M
// ACTION:DISPLAY
// DESCRIPTION:Reminder
// END:VALARM

// BEGIN:VEVENT
// UID:19970901T130000Z-123401@example.com
// DTSTAMP:19970901T130000Z
// DTSTART:19970903T163000Z
// DTEND:19970903T190000Z
// SUMMARY:Annual Employee Review
// CLASS:PRIVATE
// CATEGORIES:BUSINESS,HUMAN RESOURCES
// END:VEVENT
export interface IEvent {
  // TODO
  description: string;
  location: string;
  from: Date;
  to: Date;
  timeZone: string;
}

// ? GEO:Lat;Lon
// ? https://maps.google.com/maps?q=lat,lon
// ? http://maps.google.com/maps?q=lat,lon
// ? https://www.google.com/maps/@39.822928,-7.488359,215m/data=!3m1!1e3?hl=pt-PT

export interface ILocation {
  latitude: number;
  longitude: number;
}

// BEGIN:VCARD
// VERSION:4.0
// EMAIL;type=WORK:Paul@pocketables.com
// EMAIL;type=HOME:paul@pocketables.com
// TEL;type=WORK:+1 ‪(615) 669-9734‬
// NOTE:here's some random text to throw into the contact information
// ADR;type=WORK:;;123 fake street;Nashville;TN;37228;United States of America
// CATEGORIES: blogger, internet troll
// GENDER:M
// PHOTO;JPEG:https://secure.gravatar.com/avatar/4fdde8e771f209d9a50ceb0f02ba60b8?s=100&d=retro&r=pg
// LOGO;JPEG:https://pocketables.com/wp-content/uploads/2010/05/Pocketables_logo_400x400.jpg
// TZ:America/Chicago
// URL:https://www.pocketables.com
// FN:Paul E. King
// N:Paul King
// END:VCARD

export interface IVCard {
  // TODO
}
