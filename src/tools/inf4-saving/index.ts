import { LockSquare } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.inf4-saving.title'),
  path: '/inf4-saving',
  description: translate('tools.inf4-saving.description'),
  keywords: ['bcrypt', 'hash', 'compare', 'password', 'salt', 'round', 'storage', 'crypto'],
  component: () => import('./inf4-saving.vue'),
  icon: LockSquare,
});
