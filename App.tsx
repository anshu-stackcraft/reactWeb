import { useState } from 'react';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

type SubjectKey = 'maths' | 'science' | 'social' | 'english' | 'hindi';
type Tab = 'mocks' | 'syllabus';
type Question = { prompt: string; choices: string[]; answer: string; note: string };

const subjects: Record<SubjectKey, { name: string; short: string; mark: string; topics: string[]; questions: Question[] }> = {
  maths: {
    name: 'Mathematics Standard', short: 'Maths', mark: 'M',
    topics: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Applications of Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
    questions: [
      { prompt: 'The zeroes of x² − 5x + 6 are:', choices: ['1 and 6', '2 and 3', '−2 and −3', '3 and 5'], answer: '2 and 3', note: 'Factorise: (x − 2)(x − 3) = 0.' },
      { prompt: 'The 8th term of the AP 4, 7, 10, … is:', choices: ['22', '24', '25', '28'], answer: '25', note: 'Use aₙ = a + (n − 1)d: 4 + 7 × 3 = 25.' },
      { prompt: 'The value of sin 30° is:', choices: ['0', '1/2', '√3/2', '1'], answer: '1/2', note: 'sin 30° = 1/2.' },
    ],
  },
  science: {
    name: 'Science', short: 'Science', mark: 'S',
    topics: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and Its Compounds', 'Life Processes', 'Control and Coordination', 'How Do Organisms Reproduce?', 'Heredity', 'Light: Reflection and Refraction', 'The Human Eye and the Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment'],
    questions: [
      { prompt: 'A solution with a pH below 7 is generally:', choices: ['Acidic', 'Basic', 'Neutral', 'A salt only'], answer: 'Acidic', note: 'Acids have a pH below 7; neutral solutions have a pH of 7.' },
      { prompt: 'Photosynthesis takes place mainly in the:', choices: ['Nucleus', 'Chloroplast', 'Mitochondrion', 'Ribosome'], answer: 'Chloroplast', note: 'Chlorophyll in chloroplasts absorbs light for photosynthesis.' },
      { prompt: 'The SI unit of electric current is the:', choices: ['Volt', 'Ohm', 'Ampere', 'Watt'], answer: 'Ampere', note: 'Electric current is measured in amperes (A).' },
    ],
  },
  social: {
    name: 'Social Science', short: 'Social Sci.', mark: 'SS',
    topics: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'Print Culture and the Modern World', 'Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy', 'Power-sharing', 'Federalism', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy', 'Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy'],
    questions: [
      { prompt: 'Which is an example of the primary sector?', choices: ['Banking', 'Farming', 'Car manufacturing', 'Teaching'], answer: 'Farming', note: 'The primary sector includes activities that use natural resources.' },
      { prompt: 'Power-sharing is desirable because it:', choices: ['Reduces conflict between groups', 'Removes elections', 'Centralises all authority', 'Limits citizen participation'], answer: 'Reduces conflict between groups', note: 'Sharing power reduces social conflict and strengthens democracy.' },
      { prompt: 'GDP measures final goods and services produced:', choices: ['In a country during a year', 'By one company only', 'Over a decade only', 'Outside the economy'], answer: 'In a country during a year', note: 'GDP is the value of final goods and services produced within a country in one year.' },
    ],
  },
  english: {
    name: 'English Language & Literature', short: 'English', mark: 'E',
    topics: ['Reading Comprehension', 'Writing Skills and Grammar', 'First Flight: Prose', 'First Flight: Poetry', 'Footprints Without Feet'],
    questions: [
      { prompt: 'Choose the passive form: “Riya wrote the letter.”', choices: ['The letter wrote Riya.', 'The letter was written by Riya.', 'The letter is writing Riya.', 'Riya was written by the letter.'], answer: 'The letter was written by Riya.', note: 'Simple past passive uses was/were + past participle.' },
      { prompt: '“The stars danced in the sky” is an example of:', choices: ['Personification', 'Irony', 'Alliteration', 'Oxymoron'], answer: 'Personification', note: 'The stars are given the human action of dancing.' },
      { prompt: 'Neither of the boys ___ absent today.', choices: ['are', 'were', 'is', 'have'], answer: 'is', note: '“Neither” is singular and takes a singular verb here.' },
    ],
  },
  hindi: {
    name: 'Hindi Course A', short: 'Hindi', mark: 'हि',
    topics: ['क्षितिज भाग २: गद्य खंड', 'क्षितिज भाग २: काव्य खंड', 'कृतिका भाग २', 'व्याकरण: वाक्य भेद और रचना', 'लेखन: अनुच्छेद और पत्र'],
    questions: [
      { prompt: '“विद्यालय” शब्द में कौन-सी संधि है?', choices: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि'], answer: 'दीर्घ संधि', note: 'विद्या + आलय में आ + आ से दीर्घ स्वर संधि होती है।' },
      { prompt: '“जो मेहनत करता है, वह सफल होता है।” यह कौन-सा वाक्य है?', choices: ['सरल', 'संयुक्त', 'मिश्र', 'विस्मयादिबोधक'], answer: 'मिश्र', note: '“जो” आश्रित उपवाक्य का संकेत देता है।' },
      { prompt: '“कमल” का एक पर्यायवाची शब्द चुनिए।', choices: ['पंकज', 'पवन', 'अनल', 'गगन'], answer: 'पंकज', note: 'पंकज, कमल का पर्यायवाची है।' },
    ],
  },
};

const keys = Object.keys(subjects) as SubjectKey[];
const c = { paper: '#F5F3EC', white: '#FFFFFF', ink: '#20332D', muted: '#78817B', line: '#E4E4DA', green: '#245744', paleGreen: '#E5EEE8', orange: '#C86C42', paleOrange: '#F5E8DD' };

function Button({ label, onPress, secondary = false }: { label: string; onPress: () => void; secondary?: boolean }) {
  return <Pressable accessibilityRole="button" onPress={onPress} style={[s.button, secondary && s.buttonSecondary]}><Text style={[s.buttonText, secondary && s.buttonSecondaryText]}>{label}</Text></Pressable>;
}

export default function App() {
  const [tab, setTab] = useState<Tab>('mocks');
  const [subjectKey, setSubjectKey] = useState<SubjectKey>('maths');
  const [testKey, setTestKey] = useState<SubjectKey | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [checkedTopics, setCheckedTopics] = useState<string[]>([]);
  const currentSubject = subjects[subjectKey];
  const testSubject = testKey ? subjects[testKey] : null;
  const question = testSubject?.questions[questionIndex];
  const finished = Boolean(testSubject && questionIndex >= testSubject.questions.length);
  const score = testSubject?.questions.reduce((total, item, index) => total + Number(answers[index] === item.answer), 0) ?? 0;
  const progress = Math.round(currentSubject.topics.filter((topic) => checkedTopics.includes(`${subjectKey}:${topic}`)).length / currentSubject.topics.length * 100);

  function startTest(key: SubjectKey) {
    setTab('mocks'); setSubjectKey(key); setTestKey(key); setQuestionIndex(0); setAnswers([]);
  }
  function closeTest() {
    setTestKey(null); setQuestionIndex(0); setAnswers([]);
  }
  function toggleTopic(topic: string) {
    const id = `${subjectKey}:${topic}`;
    setCheckedTopics((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);
  }

  return (
    <View style={s.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={s.page}>
        <View style={s.topbar}>
          <View style={s.logo}><Text style={s.logoText}>Y</Text></View>
          <View style={s.brand}><Text style={s.brandName}>YADAV MOCK</Text><Text style={s.brandCaption}>LEARN. PRACTISE. GROW.</Text></View>
          <View style={s.grade}><Text style={s.gradeText}>CLASS 10</Text></View>
        </View>
        {testKey && testSubject ? (
          <ScrollView key={`test-${testKey}`} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
            <Pressable onPress={closeTest} style={s.back}><Text style={s.backText}>‹  All mock tests</Text></Pressable>
            {finished ? (
              <View style={s.testBody}>
                <View style={s.scoreCircle}><Text style={s.scoreText}>{score}/{testSubject.questions.length}</Text></View>
                <Text style={s.eyebrow}>QUICK MOCK COMPLETE</Text>
                <Text style={s.heroTitle}>Good work.</Text>
                <Text style={s.subtitle}>You got {score} out of {testSubject.questions.length} right in {testSubject.short}.</Text>
                <View style={s.reviewList}>{testSubject.questions.map((item, index) => {
                  const correct = answers[index] === item.answer;
                  return <View key={item.prompt} style={s.reviewRow}><Text style={[s.reviewTag, { color: correct ? c.green : c.orange }]}>{correct ? 'CORRECT' : 'REVIEW'}</Text><Text style={s.reviewPrompt}>{item.prompt}</Text><Text style={s.reviewNote}>{item.note}</Text></View>;
                })}</View>
                <Button label="Try again" onPress={() => startTest(testKey)} />
                <Button label="View syllabus" secondary onPress={() => { closeTest(); setTab('syllabus'); }} />
              </View>
            ) : question ? (
              <View style={s.testBody}>
                <Text style={s.eyebrow}>CLASS 10  ·  CBSE  ·  QUICK MOCK</Text>
                <Text style={s.testTitle}>{testSubject.name}</Text>
                <View style={s.progressCaption}><Text style={s.meta}>QUESTION {questionIndex + 1} OF {testSubject.questions.length}</Text><Text style={s.meta}>{Math.round((questionIndex + 1) / testSubject.questions.length * 100)}%</Text></View>
                <View style={s.track}><View style={[s.fill, { width: `${(questionIndex + 1) / testSubject.questions.length * 100}%` }]} /></View>
                <View style={s.questionCard}>
                  <Text style={s.eyebrow}>QUESTION {String(questionIndex + 1).padStart(2, '0')}</Text>
                  <Text style={s.question}>{question.prompt}</Text>
                  {question.choices.map((choice, index) => {
                    const selected = answers[questionIndex] === choice;
                    return <Pressable key={choice} accessibilityRole="radio" accessibilityState={{ checked: selected }} onPress={() => setAnswers((old) => { const next = [...old]; next[questionIndex] = choice; return next; })} style={[s.choice, selected && s.choiceSelected]}><Text style={[s.choiceMark, selected && s.choiceMarkSelected]}>{String.fromCharCode(65 + index)}</Text><Text style={[s.choiceText, selected && s.choiceTextSelected]}>{choice}</Text></Pressable>;
                  })}
                </View>
                <Button label={questionIndex === testSubject.questions.length - 1 ? 'See my result' : 'Next question'} onPress={() => { if (answers[questionIndex]) setQuestionIndex((index) => index + 1); }} />
                {!answers[questionIndex] && <Text style={s.hint}>Choose an answer to continue</Text>}
              </View>
            ) : null}
          </ScrollView>
        ) : <>
          <ScrollView key={tab} contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
            <View style={s.eyebrowRow}><View style={s.dot} /><Text style={s.eyebrow}>CBSE BOARD PREP  ·  2026–27</Text></View>
            <Text style={s.heroTitle}>{tab === 'mocks' ? 'Ready when you are.' : 'Know what to study.'}</Text>
            <Text style={s.subtitle}>{tab === 'mocks' ? 'Small practice sets. Clear explanations. Better every time.' : 'Your Class 10 roadmap, one topic at a time.'}</Text>
            {tab === 'mocks' ? <>
              <View style={s.stats}><View style={s.stat}><Text style={s.statValue}>05</Text><Text style={s.statLabel}>SUBJECTS</Text></View><View style={s.statRule} /><View style={s.stat}><Text style={s.statValue}>03</Text><Text style={s.statLabel}>QUESTIONS</Text></View><View style={s.statRule} /><View style={s.stat}><Text style={s.statValue}>06</Text><Text style={s.statLabel}>MINUTES</Text></View></View>
              <View style={s.sectionRow}><Text style={s.sectionTitle}>Pick a subject</Text><Text style={s.meta}>QUICK MOCKS</Text></View>
              {keys.map((key, index) => <View key={key} style={s.subjectCard}><View style={[s.subjectMark, index % 2 ? s.orangeMark : s.greenMark]}><Text style={[s.subjectMarkText, { color: index % 2 ? c.orange : c.green }]}>{subjects[key].mark}</Text></View><View style={s.subjectCopy}><Text style={s.subjectName}>{subjects[key].name}</Text><Text style={s.meta}>3 QUESTIONS  ·  INSTANT REVIEW</Text></View><Pressable accessibilityRole="button" accessibilityLabel={`Start ${subjects[key].name} quick mock`} onPress={() => startTest(key)} style={s.start}><Text style={s.startText}>Start →</Text></Pressable></View>)}
              <View style={s.note}><Text style={s.noteIndex}>01</Text><View style={s.noteCopy}><Text style={s.noteTitle}>Built around your board syllabus</Text><Text style={s.noteText}>Practise a little, then check off the topics you know.</Text></View></View>
            </> : <>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.subjectTabs}>{keys.map((key) => <Pressable key={key} accessibilityRole="tab" accessibilityState={{ selected: key === subjectKey }} onPress={() => setSubjectKey(key)} style={[s.subjectTab, key === subjectKey && s.subjectTabActive]}><Text style={[s.subjectTabText, key === subjectKey && s.subjectTabTextActive]}>{subjects[key].short}</Text></Pressable>)}</ScrollView>
              <View style={s.syllabusCard}><View style={s.syllabusTop}><View style={s.syllabusMark}><Text style={s.syllabusMarkText}>{currentSubject.mark}</Text></View><View style={s.subjectCopy}><Text style={s.subjectName}>{currentSubject.name}</Text><Text style={s.meta}>CBSE CLASS 10  ·  TOPIC CHECKLIST</Text></View></View><View style={s.progressCaption}><Text style={s.meta}>YOUR PROGRESS</Text><Text style={s.meta}>{progress}%</Text></View><View style={s.track}><View style={[s.syllabusFill, { width: `${progress}%` }]} /></View></View>
              <View style={s.sectionRow}><Text style={s.sectionTitle}>Topics to cover</Text><Text style={s.meta}>{currentSubject.topics.length} TOPICS</Text></View>
              {currentSubject.topics.map((topic, index) => { const complete = checkedTopics.includes(`${subjectKey}:${topic}`); return <Pressable key={topic} accessibilityRole="checkbox" accessibilityState={{ checked: complete }} onPress={() => toggleTopic(topic)} style={s.topicRow}><View style={[s.topicNumber, complete && s.topicNumberDone]}><Text style={[s.topicNumberText, complete && s.topicNumberTextDone]}>{complete ? '✓' : String(index + 1).padStart(2, '0')}</Text></View><Text style={[s.topicName, complete && s.topicNameDone]}>{topic}</Text><Text style={[s.topicAction, complete && s.topicActionDone]}>{complete ? 'DONE' : '+'}</Text></Pressable>; })}
              <Pressable onPress={() => startTest(subjectKey)} style={s.syllabusCta}><View style={s.noteCopy}><Text style={s.ctaTitle}>Ready to put it to the test?</Text><Text style={s.ctaText}>Try a quick {currentSubject.short} mock</Text></View><Text style={s.ctaArrow}>→</Text></Pressable>
            </>}
          </ScrollView>
          <View style={s.nav}><Pressable accessibilityRole="tab" accessibilityState={{ selected: tab === 'mocks' }} onPress={() => setTab('mocks')} style={s.navItem}><Text style={[s.navGlyph, tab === 'mocks' && s.navActive]}>◉</Text><Text style={[s.navText, tab === 'mocks' && s.navActive]}>MOCK TESTS</Text></Pressable><Pressable accessibilityRole="tab" accessibilityState={{ selected: tab === 'syllabus' }} onPress={() => setTab('syllabus')} style={s.navItem}><Text style={[s.navGlyph, tab === 'syllabus' && s.navActive]}>▤</Text><Text style={[s.navText, tab === 'syllabus' && s.navActive]}>SYLLABUS</Text></Pressable></View>
        </>}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: c.paper }, page: { flex: 1, width: '100%', maxWidth: 620, alignSelf: 'center', backgroundColor: c.paper },
  topbar: { height: 76, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: c.line },
  logo: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: c.green }, logoText: { color: c.white, fontFamily: 'serif', fontSize: 23, fontWeight: '800' },
  brand: { flex: 1, marginLeft: 11 }, brandName: { color: c.ink, fontSize: 12, fontWeight: '900', letterSpacing: 1.1 }, brandCaption: { marginTop: 3, color: c.muted, fontSize: 8, fontWeight: '700', letterSpacing: 1.1 },
  grade: { paddingHorizontal: 11, paddingVertical: 8, borderWidth: 1, borderColor: c.line, borderRadius: 6, backgroundColor: c.white }, gradeText: { color: c.green, fontSize: 9, fontWeight: '800', letterSpacing: 0.8 },
  content: { paddingHorizontal: 22, paddingTop: 26, paddingBottom: 34 }, eyebrowRow: { flexDirection: 'row', alignItems: 'center' }, dot: { width: 7, height: 7, marginRight: 8, borderRadius: 4, backgroundColor: c.orange },
  eyebrow: { color: c.orange, fontSize: 9, fontWeight: '800', letterSpacing: 1 }, heroTitle: { marginTop: 13, color: c.ink, fontFamily: 'serif', fontSize: 34, fontWeight: '700', lineHeight: 40 }, subtitle: { maxWidth: 390, marginTop: 7, color: c.muted, fontSize: 14, lineHeight: 21 },
  stats: { minHeight: 86, marginTop: 25, paddingVertical: 15, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 8, backgroundColor: c.green }, stat: { flex: 1, alignItems: 'center' }, statValue: { color: c.white, fontFamily: 'serif', fontSize: 23, fontWeight: '700' }, statLabel: { marginTop: 3, color: '#D8E5DD', fontSize: 8, fontWeight: '700', letterSpacing: 0.6 }, statRule: { width: 1, height: 33, backgroundColor: '#668477' },
  sectionRow: { marginTop: 28, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, sectionTitle: { color: c.ink, fontFamily: 'serif', fontSize: 21, fontWeight: '700' }, meta: { color: c.muted, fontSize: 8, fontWeight: '800', letterSpacing: 0.7 },
  subjectCard: { minHeight: 75, marginBottom: 8, paddingHorizontal: 12, paddingVertical: 11, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: c.line, borderRadius: 8, backgroundColor: c.white }, subjectMark: { width: 42, height: 42, borderRadius: 7, alignItems: 'center', justifyContent: 'center' }, greenMark: { backgroundColor: c.paleGreen }, orangeMark: { backgroundColor: c.paleOrange }, subjectMarkText: { fontFamily: 'serif', fontSize: 17, fontWeight: '700' }, subjectCopy: { minWidth: 0, flex: 1, marginLeft: 12, marginRight: 8 }, subjectName: { color: c.ink, fontSize: 13, fontWeight: '700', lineHeight: 18 },
  start: { minWidth: 67, minHeight: 38, paddingHorizontal: 9, justifyContent: 'center', borderRadius: 6, backgroundColor: c.green }, startText: { color: c.white, fontSize: 10, fontWeight: '800', textAlign: 'center' }, note: { marginTop: 14, padding: 15, flexDirection: 'row', borderLeftWidth: 3, borderLeftColor: '#D8AA59', backgroundColor: '#ECEAE1' }, noteIndex: { marginRight: 12, color: c.orange, fontFamily: 'serif', fontSize: 20, fontWeight: '700' }, noteCopy: { flex: 1 }, noteTitle: { color: c.ink, fontSize: 12, fontWeight: '800' }, noteText: { marginTop: 4, color: c.muted, fontSize: 11, lineHeight: 16 },
  subjectTabs: { paddingVertical: 18, paddingRight: 12 }, subjectTab: { minHeight: 36, marginRight: 7, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: c.line, borderRadius: 6, backgroundColor: c.white }, subjectTabActive: { borderColor: c.green, backgroundColor: c.green }, subjectTabText: { color: c.muted, fontSize: 10, fontWeight: '700' }, subjectTabTextActive: { color: c.white },
  syllabusCard: { padding: 16, borderWidth: 1, borderColor: c.line, borderRadius: 8, backgroundColor: c.white }, syllabusTop: { flexDirection: 'row', alignItems: 'center' }, syllabusMark: { width: 40, height: 40, borderRadius: 7, alignItems: 'center', justifyContent: 'center', backgroundColor: c.paleOrange }, syllabusMarkText: { color: c.orange, fontFamily: 'serif', fontSize: 16, fontWeight: '700' }, progressCaption: { marginTop: 19, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' }, track: { height: 5, overflow: 'hidden', borderRadius: 3, backgroundColor: c.line }, fill: { height: '100%', borderRadius: 3, backgroundColor: c.orange }, syllabusFill: { height: '100%', borderRadius: 3, backgroundColor: c.green },
  topicRow: { minHeight: 56, paddingVertical: 9, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: c.line }, topicNumber: { width: 31, height: 31, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECEAE1' }, topicNumberDone: { backgroundColor: c.green }, topicNumberText: { color: c.muted, fontSize: 9, fontWeight: '800' }, topicNumberTextDone: { color: c.white, fontSize: 13 }, topicName: { flex: 1, marginLeft: 11, marginRight: 8, color: c.ink, fontSize: 12, fontWeight: '600', lineHeight: 17 }, topicNameDone: { color: c.muted }, topicAction: { width: 32, color: c.orange, fontSize: 18, textAlign: 'center' }, topicActionDone: { color: c.green, fontSize: 7, fontWeight: '800' },
  syllabusCta: { minHeight: 70, marginTop: 24, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', borderRadius: 8, backgroundColor: c.green }, ctaTitle: { color: c.white, fontSize: 13, fontWeight: '800' }, ctaText: { marginTop: 4, color: '#D8E5DD', fontSize: 10 }, ctaArrow: { marginLeft: 10, color: c.white, fontSize: 22 },
  nav: { minHeight: 67, paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: c.line, backgroundColor: c.white }, navItem: { minWidth: 100, minHeight: 52, alignItems: 'center', justifyContent: 'center' }, navGlyph: { color: '#A7ADA8', fontSize: 17 }, navText: { marginTop: 3, color: c.muted, fontSize: 8, fontWeight: '800', letterSpacing: 0.65 }, navActive: { color: c.green },
  back: { alignSelf: 'flex-start', paddingVertical: 5 }, backText: { color: c.green, fontSize: 12, fontWeight: '700' }, testBody: { paddingTop: 24 }, testTitle: { marginTop: 9, color: c.ink, fontFamily: 'serif', fontSize: 27, fontWeight: '700' },
  questionCard: { marginTop: 20, marginBottom: 16, padding: 16, borderWidth: 1, borderColor: c.line, borderRadius: 8, backgroundColor: c.white }, question: { marginTop: 10, marginBottom: 17, color: c.ink, fontFamily: 'serif', fontSize: 20, fontWeight: '700', lineHeight: 28 }, choice: { minHeight: 49, marginTop: 8, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: c.line, borderRadius: 6, backgroundColor: c.white }, choiceSelected: { borderColor: c.green, backgroundColor: c.paleGreen }, choiceMark: { width: 26, height: 26, borderRadius: 14, textAlign: 'center', textAlignVertical: 'center', overflow: 'hidden', color: c.muted, backgroundColor: '#F0EFE9', fontSize: 10, fontWeight: '800', lineHeight: 26 }, choiceMarkSelected: { color: c.white, backgroundColor: c.green }, choiceText: { flex: 1, marginLeft: 10, color: c.ink, fontSize: 12, lineHeight: 18 }, choiceTextSelected: { color: c.green, fontWeight: '700' },
  button: { minHeight: 48, marginTop: 8, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center', borderRadius: 7, backgroundColor: c.green }, buttonText: { color: c.white, fontSize: 12, fontWeight: '800' }, buttonSecondary: { borderWidth: 1, borderColor: c.line, backgroundColor: c.white }, buttonSecondaryText: { color: c.green }, hint: { marginTop: 10, color: c.muted, fontSize: 11, textAlign: 'center' },
  scoreCircle: { width: 86, height: 86, marginBottom: 22, alignItems: 'center', justifyContent: 'center', borderRadius: 43, backgroundColor: c.paleGreen }, scoreText: { color: c.green, fontFamily: 'serif', fontSize: 24, fontWeight: '700' }, reviewList: { marginTop: 23, marginBottom: 13, borderTopWidth: 1, borderTopColor: c.line }, reviewRow: { paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: c.line }, reviewTag: { fontSize: 8, fontWeight: '800', letterSpacing: 0.7 }, reviewPrompt: { marginTop: 5, color: c.ink, fontSize: 12, fontWeight: '700', lineHeight: 18 }, reviewNote: { marginTop: 4, color: c.muted, fontSize: 11, lineHeight: 17 },
});