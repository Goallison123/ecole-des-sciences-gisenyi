type SignOutPlan = {
  livePreview: boolean;
  hasBearer: boolean;
  requestSignOut: () => Promise<unknown>;
  clearToken: () => void;
};

async function bounded<T>(
  promise: Promise<T>,
  milliseconds: number,
): Promise<T | undefined> {
  return Promise.race([
    promise,
    new Promise<undefined>((resolve) =>
      setTimeout(() => resolve(undefined), milliseconds),
    ),
  ]);
}

/** Clear a previous identity before beginning another OAuth sign-in. */
export async function runPreSignInSignOut(plan: SignOutPlan): Promise<void> {
  if (plan.livePreview && plan.hasBearer) {
    await bounded(plan.requestSignOut(), 1500).catch(() => undefined);
    plan.clearToken();
    return;
  }
  try {
    await bounded(plan.requestSignOut(), 10_000);
  } finally {
    plan.clearToken();
  }
}

/** Sign out and clear the local preview credential before redirecting. */
export async function runSignOut(
  plan: SignOutPlan & { redirect: () => void },
): Promise<void> {
  if (plan.livePreview && plan.hasBearer) {
    try {
      await bounded(plan.requestSignOut(), 1500);
    } finally {
      plan.clearToken();
      plan.redirect();
    }
    return;
  }
  await plan.requestSignOut();
  plan.clearToken();
  plan.redirect();
}
