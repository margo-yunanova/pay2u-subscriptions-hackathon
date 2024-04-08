export const tariffInfo: Record<string, { period: string; frequency: string }> =
  {
    '1': { period: '1 месяц', frequency: 'ежемесячно' },
    '3': { period: '3 месяца', frequency: 'каждые 3 месяца' },
    '6': { period: '6 месяцев', frequency: 'каждые полгода' },
    '12': { period: '12 месяцев', frequency: 'ежегодно' },
  };

export const baseUrl = '/api/v1';
