window.UNIT10_SLIDES = [
  {
  "title": "Unit 10: Digital Preservation, Security and Continuity",
  "bullets": [
  "Digital preservation is ongoing management of digital objects so their meaning, authenticity and usability survive change.",
  "A stored file may become unreadable, corrupt, inaccessible, context-free or unlawfully disclosed; preservation addresses all these risks.",
  "BLISS protects digital learning collections; BRIM safeguards trustworthy institutional records, provenance and restricted content."
  ],
  "takeaway": "Preservation is a managed service, not a single storage purchase."
  },
  {
  "title": "Learning outcomes and applied evidence",
  "bullets": [
  "Explain preservation, availability, authenticity, integrity, security, and continuity using appropriate distinctions.",
  "Design copies, fixity checks, permissions, migration decisions and restoration testing for a small fictional collection.",
  "Produce a preservation plan with accountable staff, risk priorities, records and recovery evidence."
  ],
  "takeaway": "A good plan is testable, documented and appropriate to the collection."
  },
  {
  "title": "Why digital information disappears",
  "bullets": [
  "Storage media can fail or be lost; an incorrect deletion or malicious change may affect multiple synchronised copies.",
  "Obsolete software or formats may prevent future rendering even when every byte remains unchanged.",
  "Missing metadata, rights information or staff knowledge can make an intact object unusable."
  ],
  "takeaway": "Bit-level survival alone does not guarantee access or trust."
  },
  {
  "title": "Digital object: beyond the file",
  "bullets": [
  "An object may include original bits, technical and descriptive metadata, a transcript, relationships and rights information.",
  "Preservation packages maintain these parts together so an item can still be interpreted years later.",
  "For a scanned minute book, the image, page order, identifier, capture events and access rules all matter."
  ],
  "takeaway": "Maintain context as well as content."
  },
  {
  "title": "Preservation lifecycle",
  "bullets": [
  "Select and appraise -> receive -> verify -> register -> store -> monitor -> manage change -> provide controlled access.",
  "Capture provenance and preservation events whenever an object is ingested, copied, repaired or migrated.",
  "Policies set responsibilities and review periods; operational evidence demonstrates that steps occurred."
  ],
  "takeaway": "Preservation work starts at acquisition, not after an incident."
  },
  {
  "title": "Preservation master and access copy",
  "bullets": [
  "A preservation master retains the most appropriate source representation and is changed only under controlled procedures.",
  "An access derivative can be resized, compressed, watermarked or redacted for permitted users.",
  "Never substitute an edited public copy for the only retained original; document links between versions."
  ],
  "takeaway": "Preservation and delivery have different requirements."
  },
  {
  "title": "What does a checksum tell us?",
  "bullets": [
  "A cryptographic digest such as SHA-256 provides a reproducible fingerprint of a byte sequence.",
  "Comparing a stored trusted baseline digest with a freshly computed digest helps detect unexpected byte changes.",
  "A matching checksum does not prove who created the content, that the source was legitimate or that access is authorised."
  ],
  "takeaway": "Fixity detects change; provenance and authentication answer different questions."
  },
  {
  "title": "Example: a fixity manifest",
  "bullets": [
  "A manifest lists stable file identifiers, paths, expected SHA-256 values, timestamps and checks performed.",
  "Example: record_001.tif -> expected 4e5f…; a comparison result of 4e5f… indicates the bytes match the baseline.",
  "A mismatch triggers investigation, containment and recovery from a verified copy; do not silently overwrite evidence."
  ],
  "takeaway": "Record both successful checks and exceptions in an audit log."
  },
  {
  "title": "Establishing a trustworthy baseline",
  "bullets": [
  "Generate hashes when files are received or created; validate that files, names, quantities and associated documentation are complete.",
  "Store the baseline manifest in an access-controlled location and preserve it separately from the files it describes.",
  "If a received file is already corrupt, computing a perfect checksum will faithfully record that bad state."
  ],
  "takeaway": "The baseline must be connected to an accountable ingest process."
  },
  {
  "title": "Storage copies: the 3-2-1 planning heuristic",
  "bullets": [
  "Plan at least three copies, use at least two storage types or sufficiently independent systems, and keep one copy off-site.",
  "Geographic separation reduces common-disaster exposure; independent credentials or an offline/immutable copy can reduce ransomware risk.",
  "3-2-1 is a starting mnemonic, not a certification: copies need checks, inventories and successful restoration tests."
  ],
  "takeaway": "Copy diversity and recoverability matter more than a slogan."
  },
  {
  "title": "A practical three-copy design",
  "bullets": [
  "Primary: controlled repository storage for approved current use and scheduled integrity monitoring.",
  "Secondary: independent local backup with restricted write access; tertiary: encrypted off-site copy under separate recovery controls.",
  "Keep retention rules, ownership, encryption keys, monitoring and test-restoration logs for each copy."
  ],
  "takeaway": "A backup without readable keys and a verified restore path may be unusable."
  },
  {
  "title": "Backup, replication and archival storage",
  "bullets": [
  "A backup is a recoverable historical copy; replication mirrors data and can reproduce accidental deletion or corruption quickly.",
  "Archival storage prioritises durable retention and controlled retrieval; it is not automatically a usable backup of production systems.",
  "Snapshots, replication and backups can complement one another but have different failure modes."
  ],
  "takeaway": "Define each copy by the problem it solves."
  },
  {
  "title": "Recovery point objective (RPO)",
  "bullets": [
  "RPO is the maximum tolerable age of data recovered after a disruption; it is expressed as an amount of time.",
  "Hourly backups might leave up to nearly one hour of changes unrecovered, if the backups work as intended.",
  "For frequently updated records, determine an acceptable RPO before deciding on backup frequency."
  ],
  "takeaway": "Backup schedule should be driven by allowable data loss."
  },
  {
  "title": "Recovery time objective (RTO)",
  "bullets": [
  "RTO is the intended time to restore a service after an outage, including required systems, staff and validation.",
  "A stored copy may take hours or days to retrieve, decrypt, restore, validate and reconnect to users.",
  "Agree RTO with stakeholders and test whether the actual recovery procedure can meet it."
  ],
  "takeaway": "Having bytes available is not the same as restoring a working service."
  },
  {
  "title": "Worked continuity case",
  "bullets": [
  "A catalogue backs up every 4 hours: worst-case change loss may approach 4 hours if the latest backup is healthy.",
  "If the tested end-to-end restoration takes 7 hours, an RTO target of 2 hours is not currently achievable.",
  "Reduce gaps by revising backup frequency, recovery design, staffing or service priorities and retesting."
  ],
  "takeaway": "State assumptions and record tested recovery performance."
  },
  {
  "title": "Integrity, availability and confidentiality",
  "bullets": [
  "Integrity means preventing or detecting unauthorised or accidental change; availability means authorised users can access needed services.",
  "Confidentiality means information is disclosed only to approved people; safeguarding some records also requires accountability.",
  "A public portal may need high availability, while a confidential personnel archive requires strict access decisions."
  ],
  "takeaway": "Security controls must fit the sensitivity and mission of each collection."
  },
  {
  "title": "Role-based and least-privilege access",
  "bullets": [
  "Define responsibilities: public visitor, library staff, records officer, preservation operator and system administrator.",
  "Grant minimum privileges required for a task; separate access to view public derivatives from rights to alter masters.",
  "Authentication, approval workflows, audit logs and periodic privilege reviews support accountability."
  ],
  "takeaway": "A hidden web link is not an access-control system."
  },
  {
  "title": "Protecting collections from ransomware",
  "bullets": [
  "Apply patch management, multifactor authentication, least privilege, secure configurations and staff awareness.",
  "Maintain protected/offline/immutable recovery copies where feasible; monitor unusual deletions and mass file changes.",
  "In an incident, isolate affected systems, preserve evidence and follow the institutional response process."
  ],
  "takeaway": "Prevent, detect, respond and recover rather than relying on backups alone."
  },
  {
  "title": "NIST CSF 2.0: six functions",
  "bullets": [
  "Govern sets risk strategy, roles and policy; Identify understands assets, dependencies and exposure.",
  "Protect implements safeguards; Detect finds suspicious events or anomalies.",
  "Respond contains and investigates; Recover restores capability and learns from the event."
  ],
  "takeaway": "The six functions are concurrent outcomes, not a one-way checklist."
  },
  {
  "title": "NDSA Levels of Digital Preservation v2.1",
  "bullets": [
  "The NDSA Levels provide a staged framework for assessing a digital preservation programme across technical and organisational areas.",
  "Version 2.1 (March 2026) adds environmental sustainability guidance; the levels support incremental improvement.",
  "A collection should select suitable targets based on risk, resources and purpose rather than assuming the highest level is always necessary."
  ],
  "takeaway": "Maturity assessment supports prioritisation; it does not replace local policy."
  },
  {
  "title": "Preservation metadata and event logs",
  "bullets": [
  "Track object IDs, rights, original formats, checksums, storage locations, agents and events.",
  "A preservation event records what happened, when, why, using what software and with what outcome.",
  "Keep enough provenance to show how a master became a derivative or a migrated format."
  ],
  "takeaway": "Document decisions so future custodians can interpret evidence."
  },
  {
  "title": "Format obsolescence and monitoring",
  "bullets": [
  "Risk arises when a format, application, codec, hardware or licence becomes difficult to access or support.",
  "Monitor inventories and dependencies; document software required to render less common or interactive objects.",
  "An open or well-documented format may lower risk, but formats still need assessment and testing."
  ],
  "takeaway": "File extension alone does not determine future preservation risk."
  },
  {
  "title": "Format migration: a controlled intervention",
  "bullets": [
  "Migration transforms an object into another format for continued use, and may change layout, features or hidden data.",
  "Retain the original where appropriate; preserve metadata and records of transformation, validation and approval.",
  "Compare renderings and significant properties, not only checksums: changed-format files are expected to have different hashes."
  ],
  "takeaway": "A successful migration is evidenced by functional and content checks."
  },
  {
  "title": "Emulation and complex multimedia",
  "bullets": [
  "Emulation reproduces elements of an earlier hardware or software environment so interactive resources can be experienced.",
  "It may be more suitable than flat export for historic websites, interactive CDs or software-dependent exhibits.",
  "Emulation also requires licensing, security, environment documentation and ongoing maintenance."
  ],
  "takeaway": "Preserve meaningful behaviour when static conversion would lose it."
  },
  {
  "title": "Security and preservation can conflict",
  "bullets": [
  "An original record may need strict retention while users need a redacted access copy.",
  "Tight encryption protects confidentiality but lost recovery keys can permanently prevent access.",
  "Retention laws, privacy, authenticity and access must be balanced through documented institutional governance."
  ],
  "takeaway": "Security must enable authorised long-term use, not accidentally destroy it."
  },
  {
  "title": "Threat and risk register",
  "bullets": [
  "Describe each asset, hazard, likelihood, impact, affected users, owner, present controls and next action.",
  "A simple likelihood x impact score can help classroom prioritisation, but professional risk methods also consider uncertainty.",
  "Review risks after system changes, new laws, incidents and evolving collection needs."
  ],
  "takeaway": "The most useful risk record identifies an owner and a feasible response."
  },
  {
  "title": "Business continuity versus disaster recovery",
  "bullets": [
  "Business continuity considers how essential services can continue during disruption, including temporary alternatives.",
  "Disaster recovery restores affected technology, data and infrastructure after disruption.",
  "For a library, continuity may include offline circulation; for records, a controlled paper register may support essential operations."
  ],
  "takeaway": "Continuity keeps critical work going while recovery repairs underlying systems."
  },
  {
  "title": "A practical incident response sequence",
  "bullets": [
  "Recognise and report unusual activity; involve the appointed incident lead and follow the organisation’s procedure.",
  "Contain damage and preserve logs/evidence; assess scope and confirm the safety of candidate restore points.",
  "Restore in priority order, validate integrity and access, document lessons and update controls."
  ],
  "takeaway": "Do not conceal an incident or restore compromised files without validation."
  },
  {
  "title": "Test restores and evidence",
  "bullets": [
  "A restoration test retrieves a selected backup, checks integrity and confirms the material can actually be opened.",
  "A service-level recovery exercise also tests permissions, metadata links, dependencies, staff roles and communication.",
  "Record test date, backup version, time taken, failures, corrective actions and next test."
  ],
  "takeaway": "A successful backup job is not proof of successful restoration."
  },
  {
  "title": "Collection case: BLISS digital library",
  "bullets": [
  "A digital exhibition stores preservation TIFF masters, smaller JPEG access images, captions, catalogue metadata and rights notices.",
  "Plan separate backups, integrity checks, consistent identifiers, public portal availability and staff restore responsibilities.",
  "If the access site fails, users may temporarily receive an approved index while the service is recovered."
  ],
  "takeaway": "Preservation and public access should remain separate but linked."
  },
  {
  "title": "Collection case: BRIM records archive",
  "bullets": [
  "A digitised committee series has source masters, page-order relationships, restriction decisions and event history.",
  "Access to some records requires named officers; checksums and preservation logs support custody and continuity.",
  "A restoration must recover the correct records together with permissions, provenance and audit history."
  ],
  "takeaway": "Restoring files without their context can compromise record trustworthiness."
  },
  {
  "title": "Environmental sustainability",
  "bullets": [
  "Retention should follow documented appraisal, legal obligations and value rather than copying everything indefinitely.",
  "Consider energy, hardware lifetime, storage tiering and verification frequency while maintaining suitable controls.",
  "NDSA v2.1 highlights sustainability as one consideration in preservation decisions, not permission to neglect risk."
  ],
  "takeaway": "Sustainable stewardship balances preservation needs and resource impacts."
  },
  {
  "title": "Guided practical: preserve a fictional collection",
  "bullets": [
  "Inspect the supplied four-file manifest, identify one simulated integrity exception and document an investigation plan.",
  "Propose three independently protected copies, a role-permission matrix and realistic RPO/RTO values.",
  "Complete a test-restoration record, a risk register and a brief BLISS or BRIM access workflow."
  ],
  "takeaway": "Students submit evidence of decisions, not confidential real records."
  },
  {
  "title": "Common misconceptions",
  "bullets": [
  "A checksum match does not confirm the file’s authenticity or prove that its content is safe to publish.",
  "Three synchronised replicas are not automatically three independent restorable backups.",
  "Changing format alters bytes; compare significant properties and document migration rather than expecting matching hashes."
  ],
  "takeaway": "Correct terminology improves operational decisions."
  },
  {
  "title": "Review, reflection and professional judgement",
  "bullets": [
  "What needs to survive: individual bytes, visible appearance, ability to search, interactive behaviour, evidential value or all of these?",
  "What could interrupt continuity: deletion, fire, format loss, loss of keys, ransomware or lack of staff knowledge?",
  "Which controls would a small resource-limited information service prioritise first, and how would success be demonstrated?"
  ],
  "takeaway": "Select safeguards based on real use, risk, resources and accountability."
  },
  {
  "title": "Unit 10: key ideas",
  "bullets": [
  "Inventory and describe collections; preserve content with independent copies, fixity checks and tested recovery.",
  "Protect sensitive materials through authorised access; manage changes such as migration using preservation metadata and validation.",
  "Preservation decisions also require legal, ethical and inclusive access practices."
  ],
  "takeaway": "Preservation is a continuing institutional responsibility supported by evidence."
  }
];
