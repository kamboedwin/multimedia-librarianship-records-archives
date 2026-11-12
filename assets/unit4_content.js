window.UNIT4_SLIDES = [
  {
  "title": "Audio in Multimedia Systems",
  "bullets": [
  "LIU08106 / RIU08106 · BLISS III and BRIM III",
  "Sound capture, editing, transcription, accessible delivery and preservation",
  "A complete media workflow connects technology to users and trustworthy sources."
  ],
  "takeaway": "Audio is useful when it is recorded responsibly and made understandable."
  },
  {
  "title": "What you will learn",
  "bullets": [
  "Explain frequency, amplitude, sampling rate, bit depth and channels.",
  "Calculate uncompressed PCM size; compare WAV, FLAC, MP3 and AAC.",
  "Record, edit and export an accessible audio resource.",
  "Document permissions, source/master files, transcripts and access copies."
  ],
  "takeaway": "The goal is a complete, documented audio resource."
  },
  {
  "title": "Why audio matters in information services",
  "bullets": [
  "Speech conveys language, accent, tone and spoken information.",
  "Libraries may use audio tours, author talks and pronunciation guides.",
  "Archives hold oral histories, event records, broadcasts and field sound.",
  "Accurate descriptions and transcripts make recordings more useful."
  ],
  "takeaway": "Audio adds information that text and images alone may miss."
  },
  {
  "title": "BLISS and BRIM: one method, different responsibilities",
  "bullets": [
  "BLISS example: a short library orientation narration for new students.",
  "BRIM example: a permitted oral-history recording described with provenance.",
  "Both require clear sound, access controls, searchable descriptions and transcripts.",
  "Archival edits must be especially transparent when context is evidence."
  ],
  "takeaway": "The technical workflow is shared; professional judgement varies."
  },
  {
  "title": "How does sound become digital?",
  "bullets": [
  "A vibrating source creates changing sound pressure in air.",
  "A microphone converts pressure changes into an electrical signal.",
  "An analogue-to-digital converter measures and encodes that signal.",
  "The digital samples are stored and later converted for playback."
  ],
  "takeaway": "Sound → microphone → ADC → file → playback."
  },
  {
  "title": "Frequency and pitch",
  "bullets": [
  "Frequency means cycles per second and is measured in hertz (Hz).",
  "A 440 Hz tone oscillates twice as frequently as a 220 Hz tone.",
  "Higher frequency generally corresponds to higher perceived pitch.",
  "Frequency and pitch do not tell us whether a recording is intelligible."
  ],
  "takeaway": "Frequency describes signal repetition, not recording quality."
  },
  {
  "title": "Amplitude and loudness",
  "bullets": [
  "Amplitude is the size of signal variation shown in a waveform.",
  "Greater amplitude often sounds louder, but perception also depends on context.",
  "A strong waveform may contain distortion, hiss or handling noise.",
  "Check both the waveform and the sound through headphones."
  ],
  "takeaway": "A large waveform is not proof of good audio."
  },
  {
  "title": "Understanding waveforms",
  "bullets": [
  "A waveform displays sample amplitude over time.",
  "Silences appear as small activity; strong speech segments vary in size.",
  "A flat-topped peak may be a clue that the signal clipped.",
  "Zoom in to identify edits, but always confirm with listening."
  ],
  "takeaway": "Use waveforms to guide listening—not replace it."
  },
  {
  "title": "Analogue and digital recording",
  "bullets": [
  "Analogue tape stores changing physical magnetisation; digital PCM stores numbers.",
  "Digitising a tape requires suitable playback equipment and capture settings.",
  "Noise, playback speed and tape condition may influence the transfer.",
  "A digitised copy needs documentation linking it to the analogue source."
  ],
  "takeaway": "A digital conversion does not automatically preserve all original quality."
  },
  {
  "title": "Sample rate explained",
  "bullets": [
  "A 48 kHz mono recording contains 48,000 samples per second.",
  "Common delivery/capture settings include 44.1 kHz and 48 kHz.",
  "Samples are measurements of a continuous signal, not complete sound waves.",
  "Increasing sample rate after recording cannot recreate missing original detail."
  ],
  "takeaway": "Sample rate is samples/second/channel, not the MP3 bitrate."
  },
  {
  "title": "Aliasing and the sampling principle",
  "bullets": [
  "Under ideal conditions, the sample rate must exceed twice the highest signal frequency.",
  "Anti-aliasing filters reduce frequencies that would otherwise be misrepresented.",
  "For example, 48 kHz capture supports content below approximately 24 kHz in theory.",
  "The hardware and source determine real-world usable quality."
  ],
  "takeaway": "Capture high enough for the required signal bandwidth."
  },
  {
  "title": "Bit depth: PCM sample precision",
  "bullets": [
  "16-bit PCM represents each sample with 16 bits; 24-bit uses 24 bits.",
  "Greater bit depth provides more possible sample values and recording headroom.",
  "It is separate from compressed delivery bitrate such as 96 kb/s.",
  "Changing a 16-bit file into 24-bit does not restore lost capture detail."
  ],
  "takeaway": "More bits do not cure poor microphone technique."
  },
  {
  "title": "Channels: mono versus stereo",
  "bullets": [
  "Mono stores one independent signal; stereo typically stores two.",
  "Mono is often sensible for a spoken library guide.",
  "Stereo may preserve useful directional context for a soundscape.",
  "Duplicating a mono channel into two channels does not create genuine stereo."
  ],
  "takeaway": "Select the channel arrangement based on purpose."
  },
  {
  "title": "File-size formula for uncompressed PCM",
  "bullets": [
  "Approximate sample bytes = sample rate × duration × bit depth ÷ 8 × channels.",
  "Example: 48,000 × 60 seconds × 24 ÷ 8 × 1 = 8,640,000 bytes.",
  "That is about 8.24 MiB, excluding header and metadata overhead.",
  "Keep decimal MB and binary MiB distinct when reporting sizes."
  ],
  "takeaway": "Audio file size is predictable before compression."
  },
  {
  "title": "Comparing stereo and mono storage",
  "bullets": [
  "48 kHz, 24-bit, mono, 60 seconds: approximately 8.24 MiB.",
  "48 kHz, 16-bit, stereo, 60 seconds: approximately 10.99 MiB.",
  "Doubling channels can outweigh a reduction in bit depth.",
  "Calculate the payload rather than guessing from the format label."
  ],
  "takeaway": "Duration, rate, depth and channels all affect PCM size."
  },
  {
  "title": "Why compression matters",
  "bullets": [
  "Uncompressed PCM preserves the decoded samples without lossy coding.",
  "Lossless compression (for example FLAC) restores the same PCM values.",
  "Lossy codecs such as MP3 discard information to reduce storage/bandwidth.",
  "Use access derivatives without overwriting a managed source/master."
  ],
  "takeaway": "Different copies can serve preservation and online access."
  },
  {
  "title": "WAV and FLAC",
  "bullets": [
  "WAV is a container commonly used for uncompressed PCM audio.",
  "Its extension alone does not prove that every WAV uses PCM.",
  "FLAC compresses losslessly and can reconstruct decoded PCM exactly.",
  "Follow documented institutional format and preservation requirements."
  ],
  "takeaway": "Check file properties—not just the extension."
  },
  {
  "title": "MP3, AAC and Ogg",
  "bullets": [
  "MP3 and AAC are often used for smaller online listening copies.",
  "Lossy compression can create audible artefacts at low bitrates.",
  "Ogg is a container that may contain Vorbis or Opus audio codecs.",
  "Evaluate compatibility, bandwidth and listening quality for your audience."
  ],
  "takeaway": "A small access file is not a replacement for the full source."
  },
  {
  "title": "Plan your recording before pressing Record",
  "bullets": [
  "Identify the audience, purpose, script or questions and required permission.",
  "Choose a quiet, suitable space and microphone position.",
  "Check input device, power, storage and recording settings.",
  "Capture ten seconds of test speech, then listen and adjust."
  ],
  "takeaway": "Preparation prevents avoidable recording failures."
  },
  {
  "title": "Recording gain and clipping",
  "bullets": [
  "Gain controls input amplification; levels should be high enough for useful speech.",
  "If peaks exceed the available digital range, clipping causes distortion.",
  "Turning clipped audio down later does not recreate the missing peaks.",
  "Monitor with headphones and aim for sensible headroom."
  ],
  "takeaway": "Capture clean sound at the source."
  },
  {
  "title": "Basic editing actions",
  "bullets": [
  "Trim only material that is genuinely unwanted for the purpose.",
  "Split clips, remove accidental long gaps and create gentle fades if needed.",
  "Apply gain or normalisation while checking for clipping.",
  "Preserve a full, controlled copy when recording context is important."
  ],
  "takeaway": "Edit a working copy and describe what changed."
  },
  {
  "title": "Normalisation versus noise reduction",
  "bullets": [
  "Peak normalisation adjusts overall gain to a chosen peak level.",
  "Loudness normalisation targets perceived loudness; it is not identical.",
  "Noise reduction can reduce steady hiss/hum using a noise-only reference.",
  "Strong filtering can create metallic artefacts or erase weak speech."
  ],
  "takeaway": "Cleaner audio should not mean altered or fabricated content."
  },
  {
  "title": "A first edit in Audacity",
  "bullets": [
  "Import your sample WAV or record a short authorised message.",
  "Listen to the full track; identify silence, hiss, clipping and speech sections.",
  "Trim or fade a working copy, apply only modest justified processing.",
  "Export a separate access copy and listen to the finished file."
  ],
  "takeaway": "An export is complete only after quality checking."
  },
  {
  "title": "Master, working file and access copy",
  "bullets": [
  "Master/source: retain a controlled, complete recording with documentation.",
  "Working file: perform edits without overwriting the master.",
  "Access file: smaller MP3/AAC or another suitable listening derivative.",
  "Use stable identifiers and record the relationships between versions."
  ],
  "takeaway": "Version clarity protects users and records."
  },
  {
  "title": "What is a transcript?",
  "bullets": [
  "A transcript represents spoken words and relevant non-speech information in text.",
  "Transcripts support search, quotation, translation and silent access.",
  "Identify speakers where appropriate and label uncertain words honestly.",
  "Verify important names, dates and numbers against the actual sound."
  ],
  "takeaway": "Transcription must be checked, not simply generated."
  },
  {
  "title": "ASR and multilingual challenges",
  "bullets": [
  "Automatic speech recognition may misunderstand dialect, names and code-switching.",
  "Kiswahili and English can occur in the same conversation in Tanzania.",
  "Mark uncertain passages instead of inventing a plausible phrase.",
  "Keep a link between the original language, corrected transcript and translation."
  ],
  "takeaway": "Machine-produced text is a draft, not verified evidence."
  },
  {
  "title": "Audio accessibility",
  "bullets": [
  "Provide a usable transcript for prerecorded spoken audio-only resources.",
  "Offer labelled playback controls; avoid forcing autoplay on users.",
  "Use clear titles, language labels, duration and navigable section headings.",
  "For video with meaningful sound, synchronised captions are a separate need."
  ],
  "takeaway": "Accessibility should be designed into the resource."
  },
  {
  "title": "Metadata for sound recordings",
  "bullets": [
  "Record item ID, title, date, source/creator, language and duration.",
  "Record codec, sample rate, bit depth, channels and version role where needed.",
  "Describe speakers, context, transcript, permission and access conditions.",
  "Link compressed derivatives back to the controlled source/master."
  ],
  "takeaway": "Metadata makes audio intelligible, findable and manageable."
  },
  {
  "title": "Consent, privacy and copyright",
  "bullets": [
  "Permission to record is not automatically permission to publish.",
  "Review personal data, sensitive interviews, music and included quotations.",
  "Document scope and conditions of permission; apply access restrictions.",
  "Avoid uploading restricted files to unapproved online editors or ASR tools."
  ],
  "takeaway": "Treat human voices as contextual and potentially sensitive records."
  },
  {
  "title": "Digital audio preservation",
  "bullets": [
  "Keep managed masters with clear provenance and stable identifiers.",
  "Use backups, access controls, format documentation and preservation planning.",
  "Checksums identify byte changes; they do not establish truthful origin by themselves.",
  "Historical tapes may require expert transfer methods and handling."
  ],
  "takeaway": "Long-term access needs more than one saved copy."
  },
  {
  "title": "Guided practical: audio resource package",
  "bullets": [
  "Use the synthetic sample or an authorised 30–60 second recording.",
  "Prepare an access file and check it on a second playback device if possible.",
  "Submit the checked transcript, edit log and descriptive metadata.",
  "Provide a BLISS guide or BRIM archive scenario rationale."
  ],
  "takeaway": "Your output is the whole resource package, not only a sound file."
  },
  {
  "title": "Applied decision: library guide",
  "bullets": [
  "A new student wants directions, library services and accessible help.",
  "Use concise narration, optional MP3 delivery and an accurate transcript.",
  "Label duration and language; avoid autoplay and unnecessary bandwidth.",
  "Test whether the listener can locate the intended information."
  ],
  "takeaway": "Good library audio supports a specific user task."
  },
  {
  "title": "Applied decision: oral-history exhibit",
  "bullets": [
  "A fictional archive has a consented interview with contextual pauses.",
  "Preserve a full controlled source and document any shortened excerpt.",
  "Attach provenance, transcript status, rights and access restrictions.",
  "Do not publish unapproved details or portray an edit as the full recording."
  ],
  "takeaway": "Context, consent and integrity shape archival access."
  },
  {
  "title": "Unit recap and self-check",
  "bullets": [
  "Explain how sound is sampled, encoded, edited and delivered.",
  "Calculate PCM storage; compare uncompressed, lossless and lossy files.",
  "Distinguish transcript verification from automated recognition.",
  "Describe one professional audio workflow for BLISS and one for BRIM."
  ],
  "takeaway": "Record faithfully, publish accessibly, preserve responsibly."
  }
];
