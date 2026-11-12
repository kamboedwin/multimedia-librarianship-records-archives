window.UNIT6_SLIDES = [
 {
  "title": "Unit 6: File Formats, Compression and Delivery",
  "bullets": [
  "Professional challenge: a library or archive must store high-quality sources and provide usable files to people with different devices and connection speeds.",
  "In this unit, select formats, calculate sizes, compare compression, test compatibility and plan responsible delivery.",
  "Follow a repeatable chain: identify content and users → decide preservation/access roles → encode/export → validate → document."
  ],
  "takeaway": "A good file is suitable for its purpose, not simply the smallest file."
 },
 {
  "title": "Learning outcomes and an end-to-end task",
  "bullets": [
  "Distinguish media type, format, file extension, codec and container; explain lossless versus lossy compression.",
  "Calculate uncompressed and bitrate-based sizes; estimate download time and storage; recognise uncertainty in the estimates.",
  "Prepare a format-decision matrix and a small delivery package for either BLISS or BRIM, with metadata and quality checks."
  ],
  "takeaway": "Justify technical choices against users, authenticity, accessibility and cost."
 },
 {
  "title": "Why formats matter to information services",
  "bullets": [
  "Users need files that display correctly; staff need editable working files; preservation teams need manageable, understandable sources.",
  "The same record may be retained as a master image and provided as a compressed derivative for public viewing.",
  "A file that can be uploaded today may be unreadable or impractical to use later without documentation and format monitoring."
  ],
  "takeaway": "Different roles can justify different copies of one resource."
 },
 {
  "title": "What is a file format?",
  "bullets": [
  "A file format defines how information is structured and represented inside a digital file, including information needed to interpret it.",
  "Examples: PNG stores raster image data; WAV stores audio using a specified structure; PDF can hold text, vector objects and embedded images.",
  "A filename extension is a hint, not proof. Renaming .jpg to .png does not convert the encoded bytes."
  ],
  "takeaway": "Identify formats from the actual file and metadata, not the extension alone."
 },
 {
  "title": "Four terms you must not mix up",
  "bullets": [
  "Container: packages streams and metadata, such as MP4 or WebM. Codec: algorithm used to encode and decode a stream, such as H.264, AAC or Opus.",
  "File extension: a naming convention (.mp4, .webm). MIME/media type: a type label used in web delivery, such as video/mp4.",
  "An MP4 may contain H.264 video and AAC audio; the container name does not fully describe the internal encoding."
  ],
  "takeaway": "Always specify container + actual codecs when planning audiovisual access."
 },
 {
  "title": "Common image format choices",
  "bullets": [
  "PNG: lossless raster, transparency support; suitable for diagrams, screenshots and graphics requiring sharp edges.",
  "JPEG: typically lossy photographic compression; often smaller for photos, but text edges and repeated saving can introduce artifacts.",
  "TIFF: flexible raster container often used in high-quality imaging workflows; actual compression and colour details must be checked. SVG: vector drawings that scale."
  ],
  "takeaway": "Choose based on content properties and workflow, not a one-size-fits-all rule."
 },
 {
  "title": "Common audio format choices",
  "bullets": [
  "WAV/BWF: widely used containers for linear PCM audio; larger but appropriate for many recording and managed-source workflows.",
  "FLAC: lossless audio compression, often much smaller than PCM without changing decoded audio samples; check workflow support.",
  "MP3, AAC and Opus: lossy options often suitable for distribution, podcasts or streaming; preserve the appropriate controlled source separately."
  ],
  "takeaway": "A compressed listening copy should not silently replace the controlled recording."
 },
 {
  "title": "Common video format choices",
  "bullets": [
  "MP4 with H.264 video and AAC audio is a practical, broadly supported access combination; check device compatibility.",
  "WebM may carry VP9 or AV1 video with Opus audio for efficient web delivery where supported.",
  "For long-term retention, consider original acquisition files, acceptable high-quality encodings, documentation and institutional policies."
  ],
  "takeaway": "Test the exact player, codec profile and device before release."
 },
 {
  "title": "Lossless compression: meaning and examples",
  "bullets": [
  "Lossless compression represents data more efficiently without discarding the information needed to reconstruct the original decoded data.",
  "PNG and FLAC are familiar examples; ZIP can compress many general-purpose documents without modifying their contents.",
  "Lossless does NOT mean uncompressed, nor does it guarantee authenticity, optimal preservation or smaller files for every input."
  ],
  "takeaway": "Lossless is about exact reconstruction of the encoded information."
 },
 {
  "title": "Lossy compression: purpose and risks",
  "bullets": [
  "Lossy compression removes or approximates information that the encoder judges less important to perceived quality.",
  "JPEG, MP3, common H.264 encodes and AAC often produce smaller access files, but the decoded result is not bit-identical to the source.",
  "Fine text, repeated editing/export, noise, gradients or moving detail can expose compression artifacts; assess the real content."
  ],
  "takeaway": "A smaller file is useful only while essential meaning and legibility remain."
 },
 {
  "title": "Examples of visible and audible artifacts",
  "bullets": [
  "JPEG may show blocks, ringing and blurred fine edges near small text or high-contrast lines.",
  "Low-bitrate audio may sound metallic, watery or smeared during transients; listeners may struggle with quiet speech.",
  "Over-compressed video may lose detail, show blockiness, banding or motion smearing. Compare at realistic display size and volume."
  ],
  "takeaway": "Evaluate actual learning and evidence content, not only the file size."
 },
 {
  "title": "Compression ratio and savings",
  "bullets": [
  "Compression ratio = original size ÷ compressed size. For 80 MB reduced to 20 MB, the ratio is 4:1.",
  "Percentage reduction = (original − compressed) ÷ original × 100. The same 80 → 20 MB example saves 75%.",
  "When original and compressed sizes are equal, the ratio is 1:1 and saving is 0%. Ratios depend on source complexity and settings."
  ],
  "takeaway": "Report both compression ratio and measured quality evidence."
 },
 {
  "title": "Bytes, bits, decimal MB and binary MiB",
  "bullets": [
  "Network bitrates are usually expressed as bit/s, kb/s or Mb/s; file sizes appear as B, kB, MB, GB or binary KiB/MiB/GiB.",
  "1 byte = 8 bits; 1 MB = 1,000,000 bytes; 1 MiB = 1,048,576 bytes; 1 Mb = 1,000,000 bits.",
  "Do not compare “8 MB” with “8 Mb” as if they were the same quantity. A single capital letter changes the unit."
  ],
  "takeaway": "State units explicitly and convert bits to bytes using ÷ 8."
 },
 {
  "title": "Uncompressed raster image size",
  "bullets": [
  "For simple packed raster data, approximate bytes = width × height × bits per pixel ÷ 8; this excludes file headers and metadata.",
  "Example: 2400 × 1600 pixels × 24 bits/pixel ÷ 8 = 11,520,000 bytes = 11.52 MB ≈ 10.99 MiB.",
  "Actual PNG, JPEG or TIFF file sizes depend on compression, metadata, channel layout and other encoding choices."
  ],
  "takeaway": "Pixel count and bit depth determine a raw baseline, not a final file-size promise."
 },
 {
  "title": "Uncompressed PCM audio size",
  "bullets": [
  "Approximate bytes = sampling rate (samples/s) × bit depth (bits/sample) × channels × duration (s) ÷ 8.",
  "Example: 48,000 × 16 × 2 × 60 ÷ 8 = 11,520,000 bytes = 11.52 MB before headers.",
  "Mono audio halves this example. MP3/Opus sizes instead depend largely on average encoded bitrate and duration."
  ],
  "takeaway": "Sampling characteristics are not the same as encoded listening-file bitrate."
 },
 {
  "title": "Compressed audiovisual file-size estimate",
  "bullets": [
  "Approximate bytes = average combined bitrate in bits/s × duration (s) ÷ 8, plus small container overhead.",
  "Example: video 2.5 Mb/s + audio 0.128 Mb/s for 180 s gives 59.13 MB or about 56.39 MiB.",
  "Variable bitrate, metadata and additional tracks make actual sizes differ; show the assumptions."
  ],
  "takeaway": "Use total average bitrate and duration for practical delivery estimates."
 },
 {
  "title": "Estimating transfer time correctly",
  "bullets": [
  "Ideal download seconds = file size in bits ÷ available throughput in bit/s; decimal MB × 8 ÷ throughput in Mb/s.",
  "Example: 40 MB ÷ (2 Mb/s ÷ 8) = 160 seconds before overhead, contention, retries and changing signal.",
  "Students on mobile connections may face data cost and inconsistent throughput; offer a smaller rendition or accessible text alternative."
  ],
  "takeaway": "A quick calculation is an ideal lower bound, not a measured connection speed."
 },
 {
  "title": "Bitrate, quality and complexity",
  "bullets": [
  "Bitrate is the average number of bits used per second of encoded media, not a direct measure of quality.",
  "A detailed moving video typically needs more information than a static tutorial at similar perceived quality; codec efficiency also differs.",
  "Constant bitrate and variable bitrate can serve different delivery needs; measure your output and inspect the result."
  ],
  "takeaway": "Never assume two different codecs at the same bitrate give identical quality."
 },
 {
  "title": "Codec compatibility and web delivery",
  "bullets": [
  "The target browser and device must support the combination of container, codec profile, level and other encoding settings.",
  "A safe practical baseline for ordinary access is MP4/H.264/AAC; test a WebM alternative when appropriate for your audience.",
  "Provide captions, a descriptive text alternative and meaningful controls. Use correct media types when publishing."
  ],
  "takeaway": "Test end-to-end on real student devices, not only the authoring computer."
 },
 {
  "title": "Progressive downloading versus streaming",
  "bullets": [
  "Progressive delivery allows a standard media file to download as playback proceeds; users may download the full file.",
  "Adaptive streaming can supply segmented renditions adjusted to network conditions, but requires more infrastructure and testing.",
  "Small course sites can use simple HTML5 audio/video players plus a download and transcript without a streaming service."
  ],
  "takeaway": "Match delivery complexity to the service and expected audience."
 },
 {
  "title": "Designing for a low-bandwidth environment",
  "bullets": [
  "Keep written explanations readable on mobile, compress access images responsibly, and avoid media autoplay.",
  "Offer explicit file size, duration, a compressed download and a transcript; do not use an enormous file when a concise alternative suffices.",
  "Test with slower connections and low-specification devices; ensure text and captions stay legible."
  ],
  "takeaway": "Accessibility includes affordability and usable performance on weak connections."
 },
 {
  "title": "Master, mezzanine and access copies",
  "bullets": [
  "Master/source: authentic or highest-quality managed capture according to policy. Mezzanine: suitable high-quality intermediate for working or re-use.",
  "Access derivative: practical JPEG, MP3 or MP4 delivered to users; may have smaller dimensions, bitrate or redactions.",
  "Each file role should have its own clear identifier, metadata, relationships and retention/access decisions."
  ],
  "takeaway": "Do not confuse easy access with long-term management."
 },
 {
  "title": "Risks of repeated lossy re-encoding",
  "bullets": [
  "Repeated JPEG saves or video/audio exports can accumulate irreversible compression damage, especially if source is already heavily compressed.",
  "Keep a controlled source and non-destructive editing workflow. Derive new delivery versions from that source when practical.",
  "Changing a filename extension does not change the codec, and upscaling cannot recover unavailable original detail."
  ],
  "takeaway": "Derive from suitable controlled sources and document transformations."
 },
 {
  "title": "File naming, manifests and fixity",
  "bullets": [
  "Use stable identifiers and unambiguous names such as ITEM012_master.tif, ITEM012_access.jpg or ITEM012_audio.mp3.",
  "A manifest can record size, file role, media type, dimensions/duration, encoding settings, rights and the related master.",
  "A cryptographic checksum (e.g., SHA-256) helps check whether bytes changed. It does not alone prove the recorded content is authentic."
  ],
  "takeaway": "Good delivery requires traceable files and a basic validation record."
 },
 {
  "title": "Privacy and rights in delivery",
  "bullets": [
  "A public access copy must not expose restricted content, participant personal data or third-party works without appropriate authority.",
  "Redacting a viewing copy does not make the original unrestricted; retain approved source controls and document authorised changes.",
  "Access controls, consent scope and copyright remain relevant regardless of how efficiently a file is encoded."
  ],
  "takeaway": "Technical compression does not override legal or institutional responsibilities."
 },
 {
  "title": "Format-decision matrix for professional work",
  "bullets": [
  "Assess purpose, content type, quality, user devices, bandwidth, accessibility, editability, open specification and local support.",
  "Classify each candidate as source/master, working/mezzanine, or access; evaluate strengths, limitations and validation evidence.",
  "No single published preference list replaces the host institution’s policy, the particular collection and actual user testing."
  ],
  "takeaway": "Write a reasoned choice rather than memorising file extensions."
 },
 {
  "title": "BLISS case: digital library teaching collection",
  "bullets": [
  "A 2400 × 1600 poster scan contains fine labels; retain a controlled high-quality source and publish an appropriately legible access image.",
  "A 3-minute catalogue tutorial should be readable on ordinary phones; use captioned access MP4 and a transcript with written steps.",
  "Check file sizes, image text legibility, playback and on-campus/mobile download before releasing the resource."
  ],
  "takeaway": "Library delivery is successful only when students can use the resource."
 },
 {
  "title": "BRIM case: oral history and archival exhibit",
  "bullets": [
  "Keep an approved high-quality source recording with provenance, access conditions and fixity evidence as institutional policy requires.",
  "Publish an MP3 or MP4 derivative only if permissions allow; include accurate transcript and protected identities where relevant.",
  "Record edition/version differences and reasons for transformations; do not present a compressed derivative as the sole authentic original."
  ],
  "takeaway": "Authenticity, rights and chain of custody are part of delivery quality."
 },
 {
  "title": "A practical comparison experiment",
  "bullets": [
  "Use the supplied fictional source image and access variants. Record format, dimensions, visible differences and exact byte sizes.",
  "Compare the supplied WAV/MP3 narration; listen at matched volume and inspect file metadata. Do not claim one codec is always better.",
  "Calculate compression ratio, percentage saving and ideal download time, then justify which copy supports access and which must be retained."
  ],
  "takeaway": "Document settings, measurements, content suitability and an observed limitation."
 },
 {
  "title": "Validation checklist: before publishing",
  "bullets": [
  "Open every output; check type, corruption, dimensions/codec settings, colour, captions/transcript and relevant audio quality.",
  "Check file name, metadata, rights/access status, source–derivative relationships and any checksum for a controlled source.",
  "Test with intended users and devices, including low bandwidth, keyboard access and meaningful alternatives."
  ],
  "takeaway": "A successful encode is not the same as a successful information service."
 },
 {
  "title": "Calculations: recap and practice",
  "bullets": [
  "Image raw MB: width × height × bits/pixel ÷ 8, then ÷ 1,000,000. PCM raw MB: rate × bit-depth × channels × seconds ÷ 8, then ÷ 1,000,000.",
  "Compressed MB: average total Mb/s × seconds ÷ 8. Transfer seconds: MB × 8 ÷ available Mb/s.",
  "Compression ratio = source MB ÷ output MB; saving % = (source − output) ÷ source × 100. Label all assumptions."
  ],
  "takeaway": "Every numerical answer needs correct units and interpretation."
 },
 {
  "title": "Applied Unit 6 assignment",
  "bullets": [
  "Select BLISS (digital library teaching package) or BRIM (fictional archival access package); use only authorised or supplied synthetic media.",
  "Provide a comparison table for at least one image, one audio item and one video item, plus one actual same-source conversion experiment.",
  "Submit size/quality calculations, decisions for retained source vs access copy, a basic manifest and a short device/accessibility test."
  ],
  "takeaway": "A professional format choice is reproducible, safe and user-centred."
 },
 {
  "title": "Check true file type and technical metadata",
  "bullets": [
  "A practical file inspector can reveal a file type and streams without changing them: use file properties, MediaInfo or a trusted metadata application.",
  "For video, record container and each stream codec, duration, dimensions and frame rate; for images, inspect pixel dimensions, channels and compression.",
  "Never infer that a renamed extension proves transcoding. Validate by opening the result and comparing it with the controlled source."
  ],
  "takeaway": "An identification report is better evidence than a filename suffix."
 },
 {
  "title": "Sustainable format planning",
  "bullets": [
  "Prefer formats with good documentation, broad support, manageable dependencies, interoperable tools and sufficient metadata support.",
  "Monitor whether software and devices still decode resources. Maintain a migration plan and verify transformations against the source.",
  "The Library of Congress Recommended Formats Statement is a useful reference, but local collections and retention policies govern specific decisions."
  ],
  "takeaway": "Format sustainability is a continuing management process."
 },
 {
  "title": "What should you now be able to do?",
  "bullets": [
  "Distinguish bytes, bits, formats, containers, codecs, and compression; defend lossless versus lossy choices.",
  "Estimate storage and delivery requirements without confusing ideal calculations with measured performance.",
  "Explain and validate an appropriate source/working/access workflow for BLISS or BRIM. Next: hypermedia authoring and interaction."
  ],
  "takeaway": "The unit prepares you to integrate and publish multimedia responsibly."
 }
];
