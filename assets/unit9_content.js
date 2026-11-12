window.UNIT9_SLIDES = [
  {
  "title": "Unit 9: Multimedia Metadata, Organisation and Retrieval",
  "bullets": [
  "Metadata describes and manages resources so users and systems can find, interpret, connect and maintain them.",
  "A resource may be an image, sound recording, video, webpage, scanned letter or complete digital collection.",
  "BLISS emphasises discovery and access; BRIM adds provenance, series context, authenticity and controlled access."
  ],
  "takeaway": "A file without context may be stored but is difficult to discover or trust."
  },
  {
  "title": "Learning outcomes and evidence",
  "bullets": [
  "Explain descriptive, structural, technical, administrative and preservation metadata with examples.",
  "Apply core Dublin Core elements and select local fields relevant to libraries or archives.",
  "Design identifiers, collection relationships, controlled keywords and a basic quality-check procedure; test searches."
  ],
  "takeaway": "Assessment should use a realistic catalogue record, not definitions alone."
  },
  {
  "title": "Why multimedia needs metadata",
  "bullets": [
  "An image filename does not tell a user who created the image, when it was made or whether public use is permitted.",
  "Audio needs recording context, participants or roles, transcript availability, language and rights.",
  "Video needs title, creator, duration, captions, subject, access conditions and technical details."
  ],
  "takeaway": "Metadata turns an isolated file into a resource that can be managed and found."
  },
  {
  "title": "Data, information, content and metadata",
  "bullets": [
  "Content is the resource itself—for example, the pixels of a photograph or samples in a WAV file.",
  "Metadata is structured information about that content, its context, use, technical properties or lifecycle.",
  "Metadata can be embedded in a file, stored in a catalogue database, linked in a manifest or kept in a preservation log."
  ],
  "takeaway": "Do not assume all metadata is embedded in the media file."
  },
  {
  "title": "Five practical categories of metadata",
  "bullets": [
  "Descriptive: title, creator, subject, description and dates for discovery.",
  "Structural: sequence, part–whole links, page order and relationships between master and derivative.",
  "Technical: format, dimensions, duration and codec; administrative: ownership and access; preservation: fixity and events."
  ],
  "takeaway": "One field can support several purposes; these categories overlap."
  },
  {
  "title": "Descriptive metadata in practice",
  "bullets": [
  "A meaningful title identifies the resource: “Student orientation guide”, not “final_video2”.",
  "Creator identifies responsible person or organisation; subject terms express what the resource concerns.",
  "Language, date, description and relevant geographic coverage improve filtering and interpretation."
  ],
  "takeaway": "Describe the resource faithfully, using evidence rather than assumptions."
  },
  {
  "title": "Structural metadata and context",
  "bullets": [
  "A digitised 12-page file needs a reliable page order; an audiobook connects chapters and audio segments.",
  "A photograph might have a capture master, an access JPEG and a thumbnail, all belonging to one described item.",
  "Archival records also belong to series and fonds, not merely folders of unrelated scans."
  ],
  "takeaway": "Preserve meaningful relationships between resources and their parts."
  },
  {
  "title": "Technical metadata in practice",
  "bullets": [
  "Images: pixel dimensions, colour space, bit depth and encoding format where needed.",
  "Audio: sample rate, channels, duration, bit depth or codec; video: frame size, frame rate, container and codec.",
  "Record technical facts from reliable file inspection and capture logs; do not guess based on an extension."
  ],
  "takeaway": "Technical metadata helps render, migrate and evaluate media."
  },
  {
  "title": "Administrative and rights metadata",
  "bullets": [
  "Rights information records ownership, licences, restrictions and permission status—not simply “copyrighted”.",
  "Administrative information can record custody, acquisition, responsibility, embargoes and access procedures.",
  "Confidential records require enforceable access controls; an “internal” tag alone does not secure a public web file."
  ],
  "takeaway": "Describe restrictions accurately and enforce them outside metadata."
  },
  {
  "title": "Preservation metadata and events",
  "bullets": [
  "Preservation metadata supports integrity, provenance and long-term management.",
  "A checksum algorithm and value can be stored with a verified date; a later check becomes a recorded event.",
  "PREMIS describes objects, events, agents and rights so actions on digital objects can be interpreted."
  ],
  "takeaway": "A checksum match supports byte-level fixity, not the truth of descriptive content."
  },
  {
  "title": "Metadata standards: why interoperability matters",
  "bullets": [
  "Standards let systems exchange or interpret fields using shared meanings.",
  "A local field “item_description” may map to Dublin Core description for basic exchange.",
  "An institution can adopt a standard plus local rules for scope, required fields, vocabulary and controlled access."
  ],
  "takeaway": "A standard is a foundation; a useful application profile makes it operational."
  },
  {
  "title": "Dublin Core: fifteen core elements",
  "bullets": [
  "Contributor, Coverage, Creator, Date, Description, Format, Identifier, Language, Publisher.",
  "Relation, Rights, Source, Subject, Title and Type complete the original fifteen elements.",
  "These elements are general and repeatable where appropriate; local systems may add more specific refinements."
  ],
  "takeaway": "The fifteen elements provide a shared vocabulary, not a complete archival management system."
  },
  {
  "title": "Dublin Core example: photograph",
  "bullets": [
  "Title: “Fictional campus library opening”; Creator: Learning Media Lab; Date: 2024-06-12.",
  "Type: StillImage; Format: image/tiff; Subject: Libraries—Orientation; Language: not applicable to a purely visual photo.",
  "Identifier: LIB-PH-004; Rights: classroom demonstration, approved internal use."
  ],
  "takeaway": "Record only known facts, and keep identifiers consistent across files."
  },
  {
  "title": "Dublin Core example: archival audio",
  "bullets": [
  "Title: “Fictional service desk oral history”; Creator: Training Media Team; Date: 2025-02-11.",
  "Type: Sound; Format: audio/wav; Subject: Records services; Language: sw; Identifier: ARC-OH-002.",
  "Relation: ARC-OH-002-transcript; Rights: internal training only; Description: synthetic classroom narration."
  ],
  "takeaway": "Media and transcripts should be connected with explicit relationships."
  },
  {
  "title": "Choose fit-for-purpose richer standards",
  "bullets": [
  "MARC 21 supports rich bibliographic cataloguing; EAD is commonly used for archival finding aids.",
  "METS can package descriptive, administrative and structural information for complex digital objects.",
  "PREMIS focuses on preservation actions and entities; none of these should be confused with the fifteen Dublin Core elements."
  ],
  "takeaway": "Select standards according to the service and interoperability requirements."
  },
  {
  "title": "Identifiers: unique, stable and meaningful",
  "bullets": [
  "A local identifier such as LIB-IMG-014 can distinguish an item within an institution.",
  "Separate item identifiers from file names and versions; a format conversion should not silently create a new intellectual item.",
  "Persistent identifier services such as DOIs or ARKs have governance requirements; a local code is not automatically persistent."
  ],
  "takeaway": "An identifier is useful only when its uniqueness and resolution are managed."
  },
  {
  "title": "Design a file naming policy",
  "bullets": [
  "Example: ARC032_p003_master.tif and ARC032_p003_access.jpg connect page, role and item.",
  "Use predictable characters, consistent zero padding, roles and controlled versioning.",
  "Do not place passwords, private names or sensitive descriptions in public filenames."
  ],
  "takeaway": "File naming supports management but is not a replacement for a catalogue."
  },
  {
  "title": "Collection hierarchy and archival context",
  "bullets": [
  "Example BLISS: collection → exhibition theme → digital item → media file.",
  "Example BRIM: fonds/creating body → series → file → item → digital representation; actual structures vary by institution.",
  "Describe provenance, original order and custody so records are not removed from their evidential context."
  ],
  "takeaway": "A search result must lead back to its collection and source context."
  },
  {
  "title": "Relationships and derivatives",
  "bullets": [
  "Relation fields connect a master with its access JPEG, thumbnail, caption or OCR text.",
  "Record source identifiers and derivative events so a transformed file remains traceable.",
  "A transcript adds searchable content but should not be mistaken for the entire sound recording."
  ],
  "takeaway": "Link related files and indicate their different functions."
  },
  {
  "title": "Subjects, keywords and controlled vocabularies",
  "bullets": [
  "Free keywords are flexible, but “student orientation” and “induction” may retrieve different results.",
  "A controlled vocabulary supplies preferred terms, variants and consistent subject labels.",
  "Local Swahili/English subject mappings can improve multilingual discovery if reviewed for meaning."
  ],
  "takeaway": "Search quality depends on consistent terminology and user language."
  },
  {
  "title": "Authority control and names",
  "bullets": [
  "The same creator may appear as “Campus Library”, “Main Campus Library” or an abbreviation.",
  "Maintain a preferred name form, stable authority ID and known alternatives.",
  "Do not merge different people or organisations solely because their names look similar."
  ],
  "takeaway": "Authority records reduce ambiguity without erasing distinctions."
  },
  {
  "title": "Dates, languages and missing values",
  "bullets": [
  "Use an agreed date convention, often ISO 8601 (YYYY-MM-DD) when full dates are known.",
  "Use explicit language codes consistently where appropriate, such as en or sw, after confirming content language.",
  "Unknown is different from an empty field, guessed date or publication date substituted for event date."
  ],
  "takeaway": "Good metadata preserves uncertainty instead of inventing precision."
  },
  {
  "title": "Search: exact matches, text matches and facets",
  "bullets": [
  "Exact identifier search retrieves a known record; keyword search matches text in selected fields.",
  "Facets let users narrow results by type, subject, date range, language or permitted access.",
  "A query against titles only differs from one against title, description and subject."
  ],
  "takeaway": "Define what is indexed and how users can filter the results."
  },
  {
  "title": "Full-text OCR versus catalogue metadata",
  "bullets": [
  "OCR extracts text from page images and can add useful searchable content.",
  "OCR errors, reading order and low-quality captures can produce false or missed matches.",
  "Metadata describes the whole resource and can remain useful when OCR is absent or unreliable."
  ],
  "takeaway": "Use OCR as an additional access layer, not a replacement for description."
  },
  {
  "title": "Precision, recall and relevance",
  "bullets": [
  "Precision asks: of the returned results, how many are relevant to the query?",
  "Recall asks: of all relevant items in the collection, how many were returned?",
  "A narrow subject search may improve precision but miss synonyms; broader searching can increase recall and noise."
  ],
  "takeaway": "Test with realistic tasks, not only whether the search box returns something."
  },
  {
  "title": "Metadata quality dimensions",
  "bullets": [
  "Completeness: required fields present; accuracy: facts match sources; consistency: shared rules followed.",
  "Uniqueness: identifiers are not duplicated; timeliness: rights and availability are kept current.",
  "Provenance: contributors, source evidence and revisions can be traced."
  ],
  "takeaway": "A filled field is not necessarily a correct field."
  },
  {
  "title": "Quality assurance: review a batch",
  "bullets": [
  "Validate duplicate item IDs, missing titles, unknown rights states and inconsistent format names.",
  "Review subject terms, impossible dates, broken relations and publication restrictions with human judgement.",
  "Track corrections in an audit log; preserve prior meanings when changes affect record evidence."
  ],
  "takeaway": "Automated validation flags problems; people make contextual decisions."
  },
  {
  "title": "Record structure: CSV and JSON",
  "bullets": [
  "CSV is convenient for flat tabular metadata; quote commas correctly and use UTF-8 encoding.",
  "JSON can express arrays and nested relationships but still requires an agreed schema.",
  "The schema should say which fields are required, repeatable, controlled, private and displayable."
  ],
  "takeaway": "A file format is not the same thing as a metadata standard."
  },
  {
  "title": "Worked example: a catalogue row",
  "bullets": [
  "ID LIB-IMG-014 | Title “Local history training poster” | Type StillImage | Subject local history.",
  "Creator Training Media Team | Date 2025-01-10 | Rights classroom use | Access public demo.",
  "Related files: LIB-IMG-014_master.tif and LIB-IMG-014_access.jpg; each file has its own technical metadata."
  ],
  "takeaway": "A complete row names the item and points to its actual files."
  },
  {
  "title": "Worked example: restricted record",
  "bullets": [
  "ID ARC-MIN-007 | Title “Fictional committee minutes” | Creator Training Records Office.",
  "Series ARC-MIN | Date 2024-05-17 | Type Text | Rights restricted internal use; access not public.",
  "A public discovery catalogue may show a limited description while the underlying files remain authorised-only."
  ],
  "takeaway": "Public discovery and permission to view the content are separate decisions."
  },
  {
  "title": "Practical workflow: from file to retrieval",
  "bullets": [
  "1. Inventory; 2. assign stable IDs; 3. capture known fields; 4. identify rights and sensitivity.",
  "5. establish controlled subject terms; 6. connect related files; 7. validate; 8. test search/facets.",
  "9. correct and record changes; 10. publish only approved descriptions and access files."
  ],
  "takeaway": "A search interface is the visible end of a documented metadata workflow."
  },
  {
  "title": "Design an application profile",
  "bullets": [
  "Choose required fields (identifier, title, type, rights/access) and optional fields (creator, date, language, duration).",
  "State accepted values, missing-value rules, name authorities, identifiers and relationship rules.",
  "Include public-display rules and privacy review before exporting metadata."
  ],
  "takeaway": "An application profile makes a general standard consistent for one institution."
  },
  {
  "title": "Hands-on retrieval task",
  "bullets": [
  "Search the fictional eight-record collection by keyword, type and access status.",
  "Compare a subject search against a broad title/description/subject query; record the number of results.",
  "Fix one incorrectly described record and explain how the correction improves retrieval or reduces risk."
  ],
  "takeaway": "Measure the effect of metadata choices using realistic questions."
  },
  {
  "title": "BLISS application: library digital collection",
  "bullets": [
  "Describe a themed set of images, recordings and learning videos with stable titles and subjects.",
  "Connect original media to captions, transcripts and access versions.",
  "Use catalogue facets to help new users find a resource by topic, format, language and audience."
  ],
  "takeaway": "Organised metadata supports discovery and inclusive information services."
  },
  {
  "title": "BRIM application: records and archives",
  "bullets": [
  "Preserve creating body, provenance, record series, original order and record status.",
  "Record relationships between files, page sequences, derivatives and preservation events.",
  "Distinguish discoverable descriptions from protected records; document who approves access."
  ],
  "takeaway": "Trustworthy retrieval depends on archival context and appropriate controls."
  },
  {
  "title": "Summary and assessment checklist",
  "bullets": [
  "You should be able to classify metadata, populate a realistic Dublin Core-based record and justify local extra fields.",
  "Check unique identifiers, rights, dates, subject terms and linked derivatives using a simple validator.",
  "Test a relevant library/archive query and explain one improvement to precision, recall, usability or privacy."
  ],
  "takeaway": "The goal is dependable discovery with preserved context and responsible access."
  }
];
window.UNIT9_DEMO_RECORDS = [
  {
  "identifier": "LIB-IMG-014",
  "title": "Local history training poster",
  "type": "StillImage",
  "date": "2025-01-10",
  "subject": "Local history",
  "language": "en",
  "access": "public",
  "programme": "BLISS",
  "creator": "Training Media Team",
  "description": "Fictional illustrated poster about local history services.",
  "collection": "LIB-COLL-01"
  },
  {
  "identifier": "LIB-AUD-003",
  "title": "Library orientation audio guide",
  "type": "Sound",
  "date": "2025-02-13",
  "subject": "Student orientation",
  "language": "en",
  "access": "public",
  "programme": "BLISS",
  "creator": "Training Media Team",
  "description": "Synthetic narrated audio guide to library desks and services.",
  "collection": "LIB-COLL-01"
  },
  {
  "identifier": "LIB-VID-008",
  "title": "How to use the library catalogue",
  "type": "MovingImage",
  "date": "2025-03-07",
  "subject": "Information literacy",
  "language": "en",
  "access": "public",
  "programme": "BLISS",
  "creator": "Training Media Team",
  "description": "Fictional instructional catalogue-search video with captions.",
  "collection": "LIB-COLL-02"
  },
  {
  "identifier": "LIB-IMG-020",
  "title": "Community reading day photograph",
  "type": "StillImage",
  "date": "2024-08-09",
  "subject": "Community events",
  "language": "sw",
  "access": "public",
  "programme": "BLISS",
  "creator": "Training Media Team",
  "description": "Invented photograph caption for a community reading event.",
  "collection": "LIB-COLL-03"
  },
  {
  "identifier": "ARC-MIN-007",
  "title": "Fictional committee meeting minutes",
  "type": "Text",
  "date": "2024-05-17",
  "subject": "Administrative decisions",
  "language": "en",
  "access": "restricted",
  "programme": "BRIM",
  "creator": "Training Records Office",
  "description": "Classroom example of controlled minutes with fictional contents.",
  "collection": "ARC-SER-04"
  },
  {
  "identifier": "ARC-AUD-002",
  "title": "Records office oral-history practice",
  "type": "Sound",
  "date": "2025-02-11",
  "subject": "Records services",
  "language": "sw",
  "access": "internal",
  "programme": "BRIM",
  "creator": "Training Records Office",
  "description": "Synthetic interview narration for internal learning use.",
  "collection": "ARC-SER-03"
  },
  {
  "identifier": "ARC-IMG-006",
  "title": "Historic office building training scan",
  "type": "StillImage",
  "date": "2023-11-20",
  "subject": "Institutional history",
  "language": "en",
  "access": "public",
  "programme": "BRIM",
  "creator": "Training Records Office",
  "description": "Fabricated archival scan with no actual personal records.",
  "collection": "ARC-SER-02"
  },
  {
  "identifier": "ARC-VID-011",
  "title": "Records transfer procedure demonstration",
  "type": "MovingImage",
  "date": "2025-06-04",
  "subject": "Records transfer",
  "language": "en",
  "access": "internal",
  "programme": "BRIM",
  "creator": "Training Records Office",
  "description": "Simulation showing records transfer with role-based access.",
  "collection": "ARC-SER-04"
  }
];
