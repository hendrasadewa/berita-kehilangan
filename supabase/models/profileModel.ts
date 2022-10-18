import supabase from '..';

// queries
export const getProfileById = (userId: string) =>
  supabase.from('profiles').select('fullname').eq('id', userId).single();

export interface UpdateProfilePayload {
  fullname: string;
}
export const updateProfileById = (
  userId: string,
  formPayload: UpdateProfilePayload
) => {
  const payload = {
    ...formPayload,
    id: userId,
    updated_at: new Date(),
  };
  return supabase.from('profile').upsert(payload);
}

// encapsulate model
const profileModel = {
  getProfileById,
  updateProfileById,
};

export default profileModel;
