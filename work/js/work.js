// work/js/work.js

const projectFilterButtons = Array.from(document.querySelectorAll('#projects .filterBtn'))
const projectCards = Array.from(document.querySelectorAll('#projects .projectCard'))

const setProjectFilter = (name) => {
  projectFilterButtons.forEach(b => b.classList.toggle('isActive', b.dataset.filter === name))
  projectCards.forEach(card => {
    const tags = (card.dataset.tags || '').split(/\s+/).filter(Boolean)
    const show = name === 'all' || tags.includes(name)
    card.classList.toggle('isHidden', !show)
  })
}

projectFilterButtons.forEach(btn => {
  btn.addEventListener('click', () => setProjectFilter(btn.dataset.filter))
})

setProjectFilter('all')

const startButtons = Array.from(document.querySelectorAll('.startBtn'))
const startTitle = document.getElementById('startTitle')
const startDesc = document.getElementById('startDesc')
const startList = document.getElementById('startList')
const startOutcome = document.getElementById('startOutcome')

const STARTING_POINTS = {
  scratch: {
    title: 'Build a product from scratch',
    desc: 'From zero to shipped: architecture, UI, data, and delivery.',
    includes: [
      'Scope and success metrics',
      'System architecture + data model',
      'UX, UI, and interaction loops',
      'Build, test, packaging, deployment',
      'Instrumentation, iteration, hardening'
    ],
    outcome: 'A production-grade product baseline you can iterate on: correct, fast, and operable.'
  },
  prototype: {
    title: 'Prototype to validate an idea',
    desc: 'De-risk the concept quickly with a real interactive artifact.',
    includes: [
      'Rapid UI and workflow exploration',
      'Clickable / runnable prototype',
      'Early technical feasibility checks',
      'User feedback loop and iteration',
      'Clear next-step plan to production'
    ],
    outcome: 'A real prototype you can show, test, and use to make a confident go/no-go decision.'
  },
  upgrade: {
    title: 'Upgrade performance + UX',
    desc: 'Fix pain points, remove latency, and improve usability without breaking what works.',
    includes: [
      'Profiling and bottleneck analysis',
      'UX cleanup and workflow simplification',
      'Architecture refactor where needed',
      'Stability improvements + guardrails',
      'Targeted feature improvements'
    ],
    outcome: 'A faster, clearer product that feels modern and holds up under real usage.'
  },
  integrate: {
    title: 'Integrate with existing systems',
    desc: 'Connect your product to the systems it must live inside.',
    includes: [
      'API design and integration strategy',
      'Data mapping and access layers',
      'Auth, roles, and audit trails',
      'Reliability, retries, monitoring',
      'Deployment and environment hardening'
    ],
    outcome: 'A connected system that is reliable in production and easy to operate.'
  },
  automate: {
    title: 'Automate a manual workflow',
    desc: 'Remove repetitive work with reliable tooling and orchestration.',
    includes: [
      'Workflow mapping + failure modes',
      'Automation tooling or workflow engine',
      'Integrations and orchestration',
      'CI/CD and release automation',
      'Monitoring and operational dashboards'
    ],
    outcome: 'A workflow that runs reliably with fewer steps, fewer mistakes, and better throughput.'
  }
}

const setStartingPoint = (key) => {
  startButtons.forEach(b => b.classList.toggle('isActive', b.dataset.start === key))
  const data = STARTING_POINTS[key]
  if (!data) return
  if (startTitle) startTitle.textContent = data.title
  if (startDesc) startDesc.textContent = data.desc
  if (startOutcome) startOutcome.textContent = data.outcome

  if (startList) {
    startList.innerHTML = ''
    data.includes.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item
      startList.appendChild(li)
    })
  }
}

startButtons.forEach(btn => {
  btn.addEventListener('click', () => setStartingPoint(btn.dataset.start))
})

setStartingPoint('scratch')

const lineFilterButtons = Array.from(document.querySelectorAll('.lineFilters .filterBtn'))
const lineCards = Array.from(document.querySelectorAll('.lineCard'))

const setLineFilter = (name) => {
  lineFilterButtons.forEach(b => b.classList.toggle('isActive', b.dataset.line === name))
  lineCards.forEach(card => {
    const lines = (card.dataset.lines || '').toLowerCase().split(/\s+/).filter(Boolean)
    const show = name === 'all' || lines.includes(name)
    card.classList.toggle('isHidden', !show)
  })
}

lineFilterButtons.forEach(btn => {
  btn.addEventListener('click', () => setLineFilter(btn.dataset.line))
})

setLineFilter('all')
