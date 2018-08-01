import React, {PureComponent} from 'react'
import assign from 'object.assign'
import Tabs from './index'

const items = [
  {
    id: 'tab1',
    title: 'Tab 1',
    body: <p>Fatback capicola leberkas pork loin pork jowl. Meatloaf shoulder pancetta, salami prosciutto ribeye andouille chuck landjaeger short loin filet mignon sirloin. Pork chop tri-tip ham pork hamburger frankfurter leberkas short ribs biltong. Prosciutto ham hock rump, andouille tongue flank sirloin tri-tip ball tip frankfurter ham drumstick meatloaf pork loin.</p>
  }, {
    id: 'tab2',
    title: 'Tab 2',
    body: <p>Kielbasa tenderloin spare ribs, andouille doner brisket chuck drumstick bresaola short loin pork t-bone ground round jowl. Ball tip pork loin doner tongue filet mignon biltong hamburger leberkas. Filet mignon kielbasa kevin short ribs, drumstick chuck shankle spare ribs tri-tip.</p>,
    active: true
  }, {
    id: 'tab3',
    title: 'Tab 3',
    body: <p>Pig pastrami pork loin kielbasa, filet mignon meatloaf short ribs tenderloin. Pork loin leberkas kevin fatback porchetta bresaola. Cow rump shoulder pastrami. Andouille pork belly t-bone short ribs brisket. Bresaola pork belly tail salami capicola meatball. Pork belly beef ham landjaeger.</p>
  }
]

export default () => <Tabs items={items} />
