import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileCirclePlus,
  faCogs,
  faFileInvoice,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faFileCirclePlus, faCogs, faFileInvoice, faClipboardCheck);

export default FontAwesomeIcon;
