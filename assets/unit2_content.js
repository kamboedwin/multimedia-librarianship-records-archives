window.UNIT2_SLIDES = [
  {
  "title": "Digital Media Fundamentals and Visual Communication",
  "bullets": [
  "LIU08106: Multimedia in Librarianship",
  "RIU08106: Multimedia in Records and Archives Management",
  "Unit 02 · From digital representation to readable, trustworthy design"
  ],
  "takeaway": "How media are encoded and arranged shapes what users see and understand."
  },
  {
  "title": "Unit 2 learning outcomes",
  "bullets": [
  "Explain pixel dimensions, raster graphics and vector graphics.",
  "Use PPI appropriately and calculate image data size.",
  "Compare RGB, CMYK, grayscale and bit depth.",
  "Apply hierarchy, typography, spacing, colour and accessible layout."
  ],
  "takeaway": "Judge both technical suitability and communication effectiveness."
  },
  {
  "title": "Why technical choices matter",
  "bullets": [
  "A sharp picture on one device may be unclear when stretched or printed.",
  "A visually attractive poster can still hide its most important information.",
  "Archival displays require context and faithful representation.",
  "Good choices begin with source, users, device and purpose."
  ],
  "takeaway": "Design quality is not only appearance; users must be able to act on the information."
  },
  {
  "title": "What is a raster image?",
  "bullets": [
  "A raster image contains a grid of pixels, each with a colour or tonal value.",
  "Width × height describes its pixel dimensions.",
  "For example, 1200 × 800 = 960,000 pixel positions.",
  "Raster representation suits photographs and document scans."
  ],
  "takeaway": "Zooming a small raster far beyond its available pixels creates blocky or soft results."
  },
  {
  "title": "Pixel grid illustration",
  "bullets": [
  "Think of each pixel as a tile in a mosaic.",
  "At normal size many tiles visually merge into a picture.",
  "Strong enlargement exposes individual tiles.",
  "Resampling can create interpolated pixels but cannot guarantee missing source detail."
  ],
  "takeaway": "Source image detail matters more than a new size label."
  },
  {
  "title": "What is a vector graphic?",
  "bullets": [
  "Vector graphics describe lines, curves and shapes mathematically.",
  "At different output sizes the drawing can be rendered again sharply.",
  "Good uses: logos, interface symbols, simple maps, flowcharts.",
  "SVG is a common vector format; PDF may contain raster and vector content."
  ],
  "takeaway": "Choose vector for scalable shapes; raster for realistic photographic tone."
  },
  {
  "title": "Raster versus vector: choose by task",
  "bullets": [
  "Library book-cover photograph: raster, because it contains photographic tone.",
  "Library navigation icon: vector, because it has simple scalable geometry.",
  "Archival scan of a letter: raster, to preserve captured page detail.",
  "Diagram of a records lifecycle: vector, for clean lines and labels."
  ],
  "takeaway": "Neither representation is universally superior; match it to the information."
  },
  {
  "title": "Pixel dimensions and megapixels",
  "bullets": [
  "Dimensions describe how many pixels exist horizontally and vertically.",
  "A 3000 × 2000 photograph contains 6,000,000 pixels.",
  "6,000,000 pixels ≈ 6 megapixels (MP).",
  "Megapixels alone do not guarantee sharpness: focus and capture quality matter."
  ],
  "takeaway": "A larger image may contain more sampled detail, but quality also matters."
  },
  {
  "title": "PPI is not the same as DPI",
  "bullets": [
  "PPI maps image pixels to a physical inch for capture or print planning.",
  "DPI usually refers to output dots a printer deposits.",
  "Changing a PPI tag without resampling need not alter the pixel count.",
  "A web browser commonly sizes images by CSS/layout rather than print PPI metadata."
  ],
  "takeaway": "Always state whether you mean source pixels, intended print density or printer dots."
  },
  {
  "title": "Worked print-size calculation",
  "bullets": [
  "Source image: 2400 × 1600 pixels.",
  "At 300 PPI: print width = 2400 ÷ 300 = 8 inches.",
  "Print height = 1600 ÷ 300 ≈ 5.33 inches.",
  "In centimetres: about 20.3 × 13.5 cm."
  ],
  "takeaway": "The calculation plans image density, not guaranteed print quality."
  },
  {
  "title": "Aspect ratio: avoid stretching",
  "bullets": [
  "1920 × 1080 has a 16:9 aspect ratio.",
  "1200 × 800 has a 3:2 aspect ratio.",
  "Proportional resizing keeps shape consistent.",
  "Cropping removes content; stretching distorts content."
  ],
  "takeaway": "An archival derivative must be labelled if a crop omits part of the source."
  },
  {
  "title": "Downsampling, upsampling and cropping",
  "bullets": [
  "Downsampling removes pixels for a smaller derivative.",
  "Upsampling estimates extra pixels through interpolation.",
  "Cropping changes the visible content, potentially removing context.",
  "For access delivery, protect the source/master and record derivative transformations."
  ],
  "takeaway": "Do not confuse a convenient access copy with the complete original."
  },
  {
  "title": "The RGB colour model",
  "bullets": [
  "RGB combines red, green and blue light.",
  "Typical 8-bit-per-channel RGB values range 0–255.",
  "RGB(255, 0, 0) gives red; RGB(0, 0, 0) black.",
  "RGB is widely used for monitors, websites and screen presentation."
  ],
  "takeaway": "Colour values need a suitable colour space/profile for predictable appearance."
  },
  {
  "title": "CMYK and grayscale",
  "bullets": [
  "CMYK stands for cyan, magenta, yellow and key (black).",
  "Printing inks subtract parts of reflected light; print results depend on process and paper.",
  "Grayscale stores tonal differences without full colour.",
  "Screen RGB values do not translate perfectly into printed inks."
  ],
  "takeaway": "Select colour mode according to output and the requirement for fidelity."
  },
  {
  "title": "Colour space and profiles",
  "bullets": [
  "A colour model describes components; a colour space interprets them more precisely.",
  "sRGB is common for web delivery.",
  "Different screens and printers can show the same numbers differently.",
  "Colour-managed workflows use profiles to reduce inconsistencies."
  ],
  "takeaway": "For historical materials, keep capture information and document editing decisions."
  },
  {
  "title": "Bit depth: more levels, not more pixels",
  "bullets": [
  "An 8-bit channel represents 2",
  "8 = 256 integer levels.",
  "A 24-bit RGB pixel commonly consists of three 8-bit channels.",
  "That gives 256³ = 16,777,216 possible channel combinations.",
  "Higher per-channel depth helps retain tonal editing flexibility in some workflows."
  ],
  "takeaway": "Bit depth and pixel dimensions describe different image properties."
  },
  {
  "title": "Image size estimate: the formula",
  "bullets": [
  "Uncompressed pixel bytes ≈ width × height × bits per pixel ÷ 8.",
  "Assume no row padding, extra metadata or container overhead.",
  "One MiB = 1,048,576 bytes.",
  "Saved JPEG or PNG sizes differ because compression and file structure matter."
  ],
  "takeaway": "Use this as a planning estimate, never as a promised saved-file size."
  },
  {
  "title": "Worked file-size calculation",
  "bullets": [
  "Example: 1920 × 1080 pixels, 24 bits/pixel.",
  "1920 × 1080 = 2,073,600 pixels.",
  "2,073,600 × 3 bytes = 6,220,800 bytes.",
  "6,220,800 ÷ 1,048,576 ≈ 5.93 MiB."
  ],
  "takeaway": "A 1920 × 1080 image can be far smaller on disk when efficiently compressed."
  },
  {
  "title": "Visual communication begins with audience",
  "bullets": [
  "Identify who will read the message and what action they must take.",
  "A library event poster should highlight title, time, place and action.",
  "An archive display should highlight item identity, date and source context.",
  "Decorative elements should not compete with critical facts."
  ],
  "takeaway": "The essential message must be easy to locate before styling decisions are made."
  },
  {
  "title": "Hierarchy and visual grouping",
  "bullets": [
  "Hierarchy controls reading order: title, main message, details, source.",
  "Proximity groups elements that belong together.",
  "Alignment makes lines and edges visually consistent.",
  "White space separates groups and reduces cognitive load."
  ],
  "takeaway": "If everything is equally bold, nothing is clearly important."
  },
  {
  "title": "Typography for clarity",
  "bullets": [
  "Use one readable body typeface and a consistent heading style.",
  "Match size and spacing to device and viewing distance.",
  "Avoid all-capital body paragraphs and excessive centred text.",
  "Prefer actual selectable text over images of text where possible."
  ],
  "takeaway": "Typography is a communication decision, not merely decoration."
  },
  {
  "title": "Contrast and accessible colour",
  "bullets": [
  "WCAG 2.2 AA generally calls for 4.5:1 contrast for normal text.",
  "Qualifying large text generally needs at least 3:1.",
  "There are stated exceptions, and colour contrast is only one accessibility measure.",
  "Do not communicate urgent status by red/green alone: add labels or patterns."
  ],
  "takeaway": "Use readable text, explicit labels and clear non-colour cues."
  },
  {
  "title": "Example: improve a crowded library poster",
  "bullets": [
  "Weak design: four fonts, grey 10-point text, five equal headings.",
  "Improvement: one primary heading, clear schedule and strong action.",
  "Use left alignment, consistent margins and adequate spacing.",
  "Check the result on a mobile phone, not only a large desktop."
  ],
  "takeaway": "Test whether a first-time visitor can find event date and venue quickly."
  },
  {
  "title": "Example: improve an archival exhibit card",
  "bullets": [
  "Weak design: large cropped photograph with no date or source.",
  "Improvement: accurate title, creator/date, provenance and rights note.",
  "State when the displayed image is an edited or cropped derivative.",
  "Use sharp, appropriately scaled scans and retain protected masters."
  ],
  "takeaway": "Readability should never come at the expense of source context."
  },
  {
  "title": "Responsive design and small screens",
  "bullets": [
  "A three-column desktop image gallery may become one column on mobile.",
  "Text should remain legible without sideways scrolling.",
  "Menus and controls need clear labels and touch/keyboard access.",
  "Evaluate real content, not only the empty template."
  ],
  "takeaway": "A responsive layout protects the task when the device changes."
  },
  {
  "title": "Worked design decision matrix",
  "bullets": [
  "Photograph of a collection item: raster + accurate description.",
  "Scalable interface icon: vector + accessible name.",
  "Print poster: plan physical dimensions and appropriate reproduction quality.",
  "Public web exhibit: optimise derivatives and preserve originals separately."
  ],
  "takeaway": "Technical and ethical decisions form one production workflow."
  },
  {
  "title": "Guided practical: compare two layouts",
  "bullets": [
  "Select an authorised image and define your audience.",
  "Record dimensions, aspect ratio and intended output.",
  "Sketch two layouts, then choose hierarchy, fonts and colour.",
  "Check legibility, contrast, source attribution and peer feedback."
  ],
  "takeaway": "Demonstrate a justified design improvement, not merely a prettier appearance."
  },
  {
  "title": "BLISS pathway: digital library notice",
  "bullets": [
  "Use a clear heading for the service or event.",
  "Include accurate time/place or the next action near the heading.",
  "Use a simple icon or suitable photograph with attribution.",
  "Ask another student to find the essential detail in ten seconds."
  ],
  "takeaway": "Measure whether the notice helps library users complete a task."
  },
  {
  "title": "BRIM pathway: archival record display",
  "bullets": [
  "Start with a valid item identifier, title and date/context.",
  "Use a faithful access scan; preserve a source/master separately.",
  "If the display uses a crop or enhanced derivative, label it.",
  "Verify restrictions, permissions and information accuracy."
  ],
  "takeaway": "A trustworthy exhibition card communicates provenance as well as appearance."
  },
  {
  "title": "Unit 2 quick review",
  "bullets": [
  "What is the difference between PPI and DPI?",
  "What is the pixel payload size of 800 × 600 at 24 bits/pixel?",
  "Why is a vector graphic suitable for a logo but not a photographic scan?",
  "What four changes would improve a hard-to-read poster?"
  ],
  "takeaway": "Explain concepts in your own words and justify decisions using professional examples."
  },
  {
  "title": "Your application task",
  "bullets": [
  "Create a one-page information visual for BLISS or BRIM users.",
  "Submit the design with a short rationale explaining technical and layout decisions.",
  "Include an accessibility check and source/permission information.",
  "Use the course submission instructions for deadlines and delivery."
  ],
  "takeaway": "The website can record personal progress but does not submit coursework."
  }
];
